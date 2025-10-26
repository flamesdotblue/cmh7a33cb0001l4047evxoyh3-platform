import { GitBranch, Settings, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Connect GitHub, auto-detect',
    desc: 'We scan your repo and infer framework, build, and runtime—no config files required.',
  },
  {
    icon: Settings,
    title: 'Zero-config pipelines',
    desc: 'CI/CD is provisioned automatically with caching, tests, lint, and deploy steps optimized.',
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Ephemeral tokens, least-privilege roles, and isolated preview environments out of the box.',
  },
  {
    icon: Zap,
    title: 'Instant previews',
    desc: 'Every PR gets a live URL with logs, metrics, and rollbacks one click away.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need, automatically</h2>
        <p className="mt-3 text-white/70">From repository to production in under a minute. Focus on code while we handle DevOps.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
