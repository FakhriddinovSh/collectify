import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Theme } from '../Theme/Theme';
import { useContext } from 'react';
import { Context } from '../../App';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [theme, setTheme] = useContext(Context);
	console.log(theme);

	return (
		<header className={theme == 'light' ? 'white' : 'dark'}>
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link to="/" className="text-2xl italic">
						Collectify
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="18"
							viewBox="0 0 25 18"
							fill={theme == 'light' ? 'black' : 'white'}
						>
							fill={theme == 'light' ? 'black' : 'white'}
							<rect width="25" height="2" />
							fill={theme == 'light' ? 'black' : 'white'}
							<rect y="7" width="25" height="2" />
							fill={theme == 'light' ? 'black' : 'white'}
							<rect y="14" width="25" height="2" />
						</svg>
					</button>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
					<a
						href="#"
						className={
							theme == 'light'
								? 'text-sm font-semibold leading-6 text-gray-900'
								: 'text-sm font-semibold leading-6 text-white'
						}
					>
						Products
					</a>
					<Link
						to="/dashboard"
						className={
							theme == 'light'
								? 'text-sm font-semibold leading-6 text-gray-900'
								: 'text-sm font-semibold leading-6 text-white'
						}
					>
						Dashboard
					</Link>
					<Link
						to="/admin"
						className={
							theme == 'light'
								? 'text-sm font-semibold leading-6 text-gray-900'
								: 'text-sm font-semibold leading-6 text-white'
						}
					>
						Admin
					</Link>
					<button
						className={
							theme == 'light'
								? 'text-sm font-semibold leading-6 text-gray-900'
								: 'text-sm font-semibold leading-6 text-white'
						}
					>
						Log out
					</button>
				</Popover.Group>
				<div className="hidden lg:flex lg:flex-1 items-center lg:justify-end">
					<Link
						className={
							theme == 'light'
								? 'text-sm font-semibold leading-6 text-gray-900'
								: 'text-sm font-semibold leading-6 text-white'
						}
						to="/login"
					>
						Login
					</Link>
					<Theme margin="mx-4" />
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel
					className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
					style={{
						backgroundColor: theme == 'light' ? 'white' : '#2a333d',
					}}
				>
					<div className="flex items-center justify-between">
						<Theme />

						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 "
							onClick={() => setMobileMenuOpen(false)}
						>
							<svg
								width="21"
								height="22"
								viewBox="0 0 21 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.5001 8.17157L3.0755 0.746948L0.24707 3.57538L7.67169 11L0.24707 18.4246L3.0755 21.253L10.5001 13.8284L17.9247 21.253L20.7532 18.4246L13.3285 11L20.7532 3.57538L17.9247 0.746948L10.5001 8.17157Z"
									fill={theme == 'light' ? 'black' : 'white'}
								/>
							</svg>
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-black"
									style={{
										color:
											theme == 'light' ? '#A6ADBA' : '',
									}}
								>
									Product
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-black"
									style={{
										color:
											theme == 'light' ? '#A6ADBA' : '',
									}}
								>
									Features
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-black"
									style={{
										color:
											theme == 'light' ? '#A6ADBA' : '',
									}}
								>
									Marketplace
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-black"
									style={{
										color:
											theme == 'light' ? '#A6ADBA' : '',
									}}
								>
									Company
								</a>
							</div>
							<div className="py-6">
								<Link
									to="/login"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  hover:bg-gray-50 hover:text-black"
									style={{
										color:
											theme == 'light' ? '#A6ADBA' : '',
									}}
								>
									Log in
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};
