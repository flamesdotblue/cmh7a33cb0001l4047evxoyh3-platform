import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: '1. Link your GitHub repository',
    details: 'OAuth securely, select a repo, and we create the integration hooks for pushes and PRs.',
  },
  {
    title: '2. Auto-provision infrastructure',
    details: 'We infer the right runtime, build image, and edge/network settings—no .yml or scripts needed.',
  },
  {
    title: '3. CI/CD boots up instantly',
    details: 'Tests, build, and deploy pipelines are generated with smart defaults and cache layers.',
  },
  {
    title: '4. Deploy and iterate',
    details: 'Every commit gets a preview URL; merge to main promotes to prod with rollbacks ready.',
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative mx-auto w-full max-w-5xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">One click from code to cloud</h2>
        <p className="mt-3 text-white/70">A streamlined path that removes manual configuration and repetitive setup.</p>
      </div>
      <ol className="space-y-5">
        {steps.map((s) => (
          <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-white/70">{s.details}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-neutral-900 shadow-lg shadow-black/20 transition hover:opacity-90">Connect GitHub</a>
        <a href="#" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">View Docs</a>
      </div>
    </section>
  );
}
