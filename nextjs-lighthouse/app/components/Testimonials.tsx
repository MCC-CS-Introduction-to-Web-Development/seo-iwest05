'use client'

const reviews = [
  { author: "Jake R.", quote: "Really clean site, loaded super fast on my phone." },
  { author: "Prof. Chen", quote: "Good work on the performance improvements." },
]

export default function Testimonials() {
  return (
    <section className="w-full py-6">
      <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">What people say</h3>
      <div className="flex flex-col gap-3 sm:flex-row">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="flex-1 rounded-xl border border-black/[.08] dark:border-white/[.145] p-4"
          >
            <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">&ldquo;{r.quote}&rdquo;</p>
            <p className="text-sm font-medium mt-2 text-black dark:text-white">— {r.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
