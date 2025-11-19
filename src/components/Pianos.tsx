"use client";

import React, { useMemo, useRef, useState } from "react";

/* -----------------------------------------------------------
   🎹 Piano (Next.js + Tailwind, responsive)
   - Activation audio (overlay)
   - Mode "piano désaccordé"
   ----------------------------------------------------------- */

// ⚙️ Convertit un nom de note (ex: "C#4") en fréquence (Hz)
function noteToFreq(note: string): number {
    // 🎵 Référence: A4 = 440 Hz
    const SEMITONES: Record<string, number> = {
        C: -9,
        "C#": -8,
        Db: -8,
        D: -7,
        "D#": -6,
        Eb: -6,
        E: -5,
        F: -4,
        "F#": -3,
        Gb: -3,
        G: -2,
        "G#": -1,
        Ab: -1,
        A: 0,
        "A#": 1,
        Bb: 1,
        B: 2,
    };

    const match = note.match(/^([A-G]#?b?)(\d)$/);
    if (!match) return 440;

    const name = match[1];
    const octave = parseInt(match[2], 10);
    const semitoneFromA4 = (octave - 4) * 12 + (SEMITONES[name] ?? 0);

    return 440 * Math.pow(2, semitoneFromA4 / 12);
}

// ⚙️ Applique un décalage en cents à une fréquence
function detuneFreq(freq: number, cents: number): number {
    // 1200 cents = 1 octave, 100 cents = 1 demi-ton
    return freq * Math.pow(2, cents / 1200);
}

type BlackKey = {
    name: string;
    between: number;
};

const WHITE_KEY_COUNT = 7;

export default function Piano() {
    // 🔒 Activation audio (imposée par les navigateurs)
    const [audioReady, setAudioReady] = useState(false);
    const audioCtxRef = useRef<AudioContext | null>(null);

    // 🎛️ État "piano désaccordé"
    const [detuned, setDetuned] = useState(false);

    // 🧭 Table de désaccordage par touche (conservée tant que la page reste ouverte)
    const detuneCentsRef = useRef<Record<string, number>>({});

    // 🎹 Notes d’une octave
    const whiteNotes = useMemo<string[]>(
        () => ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
        []
    );

    const blackLayout = useMemo<BlackKey[]>(
        () => [
            { name: "C#4", between: 0 },
            { name: "D#4", between: 1 },
            // pas de noire entre E et F
            { name: "F#4", between: 3 },
            { name: "G#4", between: 4 },
            { name: "A#4", between: 5 },
        ],
        []
    );

    // ▶️ Initialise et "débloque" l'audio au premier clic/tap
    function initAudio(): void {
        if (typeof window === "undefined") return;

        if (!audioCtxRef.current) {
            const AudioCtx =
                (window as any).AudioContext ||
                (window as any).webkitAudioContext;
            if (!AudioCtx) return;
            audioCtxRef.current = new AudioCtx();
        }

        const ctx = audioCtxRef.current;
        if (!ctx) return;

        ctx.resume().then(() => setAudioReady(true));
    }

    // 🎛️ Active/désactive le mode désaccordé
    function toggleDetuned(e: React.ChangeEvent<HTMLInputElement>): void {
        const checked = e.target.checked;
        setDetuned(checked);

        if (checked) {
            const ensureDetuneFor = (note: string) => {
                if (detuneCentsRef.current[note] == null) {
                    const cents = Math.random() * 70 - 35; // [-35, +35]
                    detuneCentsRef.current[note] = cents;
                }
            };

            whiteNotes.forEach(ensureDetuneFor);
            blackLayout.map((b) => b.name).forEach(ensureDetuneFor);
        }
    }

    // ▶️ Joue un son court pour une note
    function playNote(note: string): void {
        const ctx = audioCtxRef.current;
        if (!ctx || !audioReady) return;

        const now = ctx.currentTime;
        const duration = 0.4;

        let freq = noteToFreq(note);

        if (detuned) {
            const cents = detuneCentsRef.current[note] ?? 0;
            freq = detuneFreq(freq, cents);
        }

        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;

        const gain = ctx.createGain();
        const attack = 0.01;
        const decay = 0.15;
        const sustain = 0.7;
        const release = 0.2;
        const peak = 0.25;

        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(peak, now + attack);
        gain.gain.linearRampToValueAtTime(peak * sustain, now + attack + decay);
        gain.gain.linearRampToValueAtTime(0, now + duration + release);

        osc.connect(gain).connect(ctx.destination);
        osc.start(now);
        osc.stop(now + duration + release + 0.01);

        osc.onended = () => {
            try {
                osc.disconnect();
                gain.disconnect();
            } catch {
                // on ignore les erreurs de déconnexion
            }
        };
    }

    return (
        <div className="mx-auto my-6 w-full max-w-[448px]">
            {/* Barre d'options */}
            <div className="mb-2 flex items-center gap-3">
                <label className="inline-flex items-center gap-2 text-sm text-gray-100">
                    <input
                        type="checkbox"
                        checked={detuned}
                        onChange={toggleDetuned}
                        disabled={!audioReady}
                        className="h-4 w-4 cursor-pointer disabled:cursor-not-allowed"
                    />
                    <span>Piano désaccordé</span>
                </label>
            </div>

            {/* Piano + overlay d'activation */}
            <div className="piano-container h-[180px] md:h-[220px]">
                {!audioReady && (
                    <button
                        className="audio-overlay z-30 flex flex-col items-center justify-center rounded-lg bg-white/75 text-lg leading-tight text-gray-800 transition hover:bg-white/90"
                        onClick={initAudio}
                        onTouchStart={(
                            e: React.TouchEvent<HTMLButtonElement>
                        ) => {
                            e.preventDefault();
                            initAudio();
                        }}
                    >
                        🔈 Activer le son
                        <span className="mt-2 block text-xs text-gray-600">
                            Cliquez ici pour faire du piano
                        </span>
                    </button>
                )}

                {/* touches blanches */}
                <div className="relative z-[1] flex h-full">
                    {whiteNotes.map((note) => {
                        const cents = detuneCentsRef.current[note];
                        const title =
                            detuned && cents != null
                                ? `${note} (${cents.toFixed(1)} cents)`
                                : note;

                        return (
                            <button
                                key={note}
                                className="key-white relative flex flex-1 items-end justify-center border border-gray-300 text-gray-600 shadow-inner transition hover:brightness-95 focus:outline-none disabled:cursor-not-allowed"
                                onMouseEnter={() => playNote(note)}
                                onTouchStart={() => playNote(note)}
                                aria-label={`Jouer ${note}`}
                                disabled={!audioReady}
                                title={title}
                            >
                                <span className="key-white-label text-xs font-mono text-gray-500 md:text-sm">
                                    {note.replace("4", "")}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* touches noires */}
                {blackLayout.map(({ name, between }) => {
                    const cents = detuneCentsRef.current[name];
                    const title =
                        detuned && cents != null
                            ? `${name} (${cents.toFixed(1)} cents)`
                            : name;

                    // 🌐 position en pourcentage de la largeur du piano
                    const leftPercent = ((between + 1) / WHITE_KEY_COUNT) * 100;

                    return (
                        <button
                            key={name}
                            className="key-black absolute top-0 h-[120px] w-9 border border-black/80 transition-transform duration-75 hover:translate-y-px hover:brightness-110 disabled:cursor-not-allowed md:h-[140px] z-20"
                            style={{
                                left: `calc(${leftPercent}% - 18px)`,
                            }}
                            onMouseEnter={() => playNote(name)}
                            onTouchStart={() => playNote(name)}
                            aria-label={`Jouer ${name}`}
                            disabled={!audioReady}
                            title={title}
                        />
                    );
                })}
            </div>
        </div>
    );
}
