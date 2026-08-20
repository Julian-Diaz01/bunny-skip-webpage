/**
 * Motion tokens for BunnySkipRig — a looping, multi-part bound-cycle
 * animation. Cyclic infinite loops in `motion/react` are driven by
 * keyframe arrays + `repeat: Infinity`, not one-shot `type: "spring"`
 * transitions (springs settle to a single target and don't natively
 * loop through several waypoints). The "spring physics" feel instead
 * comes from `overshootEase`: a bezier with overshoot, used as each
 * keyframe segment's easing so motion still reads springy/organic.
 */

export const RIG_CYCLE_SECONDS = 1.15

type CubicBezier = [number, number, number, number]

/** Non-uniform keyframe placement: quick launch, long hangtime, quick land. */
export const RIG_TIMES: number[] = [0, 0.18, 0.5, 0.82, 1]

export const overshootEase: CubicBezier = [0.34, 1.56, 0.64, 1]
export const settleEase: CubicBezier = [0.65, 0, 0.35, 1]

export const rigTransition = {
  duration: RIG_CYCLE_SECONDS,
  times: RIG_TIMES,
  ease: [overshootEase, settleEase, overshootEase, settleEase],
  repeat: Infinity,
  repeatType: "loop" as const,
}
