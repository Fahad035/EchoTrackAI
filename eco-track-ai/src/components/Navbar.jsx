import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
	{ label: "Home", href: "/#home", external: true },
	{ label: "Calculator", href: "/#calculator", external: true },
	{ label: "Dashboard", href: "/dashboard" },
	{ label: "Learn", href: "/awareness" },
	{ label: "Contact", href: "/#contact", external: true },
];

function Navbar() {
	const [open, setOpen] = useState(false);
	const location = useLocation();

	const closeMenu = () => setOpen(false);

	const isActive = (href) => {
		if (href.startsWith("/#")) return location.pathname === "/";
		return location.pathname === href;
	};

	return (
		<nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-2xl">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
				<Link to="/" onClick={closeMenu} className="flex items-center gap-3 text-white transition-opacity hover:opacity-90">
					<span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 via-cyan-400 to-sky-500 text-xl shadow-lg shadow-emerald-500/20 animate-glow">
						🌱
					</span>
					<div>
						<p className="text-lg font-black tracking-tight">EcoTrack AI</p>
						<p className="text-xs uppercase tracking-[0.3em] text-white/60">Sustainability platform</p>
					</div>
				</Link>

				<div className="hidden items-center gap-4 lg:flex">
					{navLinks.map((link) => {
						const active = isActive(link.href);
						const linkClasses = `group relative px-3 py-2 text-sm font-semibold transition-all duration-300 hover:text-white ${active ? "text-white" : "text-emerald-300/80"
							}`;

						const content = (
							<>
								<span className="relative z-10">{link.label}</span>
								{/* Gradient hover background */}
								<span className="absolute inset-0 -z-10 scale-90 rounded-xl bg-linear-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
								{/* Active indicator dot */}
								{active && (
									<span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
								)}
							</>
						);

						return link.external ? (
							<a key={link.label} href={link.href} className={linkClasses}>
								{content}
							</a>
						) : (
							<Link key={link.label} to={link.href} className={linkClasses}>
								{content}
							</Link>
						);
					})}
				</div>

				<div className="hidden lg:block">
					<Link
						to="/dashboard"
						className="btn btn-primary relative overflow-hidden font-bold text-emerald-500 transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95"
					>
						<span className="relative z-10">Start Tracking</span>
						{/* Button gradient hover effect */}
						<span className="absolute inset-0 z-0 bg-linear-to-r from-emerald-500 to-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100" />
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
					{navLinks.map((link, index) => {
						const active = isActive(link.href);
						const mobileClasses = `flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:bg-white/10 ${active ? "border-emerald-500/50 bg-emerald-500/10 text-white" : "text-white/80"
							}`;

						const content = (
							<>
								<span>{link.label}</span>
								{active && <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />}
							</>
						);

						return link.external ? (
							<a
								key={link.label}
								href={link.href}
								onClick={closeMenu}
								className={mobileClasses}
								style={{ animationDelay: `${index * 60}ms` }}
							>
								{content}
							</a>
						) : (
							<Link
								key={link.label}
								to={link.href}
								onClick={closeMenu}
								className={mobileClasses}
								style={{ animationDelay: `${index * 60}ms` }}
							>
								{content}
							</Link>
						);
					})}

					<Link
						to="/dashboard"
						onClick={closeMenu}
						className="btn btn-primary relative mt-1 w-full justify-center overflow-hidden"
					>
						<span className="relative z-10">Open Dashboard</span>
						<span className="absolute inset-0 z-0 bg-linear-to-r from-emerald-500 to-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100" />
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
