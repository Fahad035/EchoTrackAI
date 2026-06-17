import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
	{ label: "Home", href: "/#home", external: true },
	{ label: "Calculator", href: "/#calculator", external: true },
	{ label: "Dashboard", href: "/dashboard", external: true },
	{ label: "Learn", href: "/awareness", external: true },
	{ label: "Contact", href: "/#contact", external: true },
];

function Navbar() {
	const [open, setOpen] = useState(false);

	const closeMenu = () => setOpen(false);

	return (
		<nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/78 backdrop-blur-2xl">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<Link to="/" onClick={closeMenu} className="flex items-center gap-3 text-white">
					<span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 via-cyan-400 to-sky-500 text-xl shadow-lg shadow-emerald-500/20 animate-glow">
						🌱
					</span>
					<div>
						<p className="text-lg font-black tracking-tight">EcoTrack AI</p>
						<p className="text-xs uppercase tracking-[0.3em] text-white/45">Sustainability platform</p>
					</div>
				</Link>

				<div className="hidden items-center gap-4 lg:flex">
					{navLinks.map((link) =>
						link.external ? (
							<a key={link.label} href={link.href} className="nav-link font-semibold text-emerald-300">
								{link.label}
							</a>
						) : (
							<Link key={link.label} to={link.href} className="nav-link">
								{link.label}
							</Link>
						)
					)}
				</div>

				<div className="hidden lg:block">
					<Link to="/dashboard" className="btn btn-primary font-bold text-emerald-500">
						Start Tracking
					</Link>
				</div>

				<button
					type="button"
					className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5 lg:hidden"
					aria-label={open ? "Close menu" : "Open menu"}
					aria-expanded={open}
					onClick={() => setOpen((value) => !value)}
				>
					<span className="relative block h-4 w-5">
						<span className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45 bg-cyan-300" : ""}`} />
						<span className={`absolute left-0 top-2 h-0.5 w-full rounded-full bg-cyan-300 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
						<span className={`absolute left-0 top-4 h-0.5 w-full rounded-full bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45 bg-emerald-300" : ""}`} />
					</span>
				</button>
			</div>

			<div
				className={`lg:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 px-4 transition-all duration-300 ${open ? "max-h-128 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}`}
			>
				<div className="mx-auto flex max-w-7xl flex-col gap-3">
					{navLinks.map((link, index) =>
						link.external ? (
							<a
								key={link.label}
								href={link.href}
								onClick={closeMenu}
								className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
								style={{ animationDelay: `${index * 60}ms` }}
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.label}
								to={link.href}
								onClick={closeMenu}
								className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
								style={{ animationDelay: `${index * 60}ms` }}
							>
								{link.label}
							</Link>
						)
					)}

					<Link to="/dashboard" onClick={closeMenu} className="btn btn-primary mt-1 w-full justify-center">
						Open Dashboard
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
