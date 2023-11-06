import { Theme } from '../../components/Theme/Theme';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from '../../components/ui/menubar';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '../../components/ui/avatar';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
	const theme = localStorage.getItem('theme');

	return (
		<>
			<button
				data-drawer-target="default-sidebar"
				data-drawer-toggle="default-sidebar"
				aria-controls="default-sidebar"
				type="button"
				className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<span className="sr-only">Open sidebar</span>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					/>
				</svg>
			</button>
			<aside
				id="default-sidebar"
				className={
					theme == 'dark'
						? 'dark fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
						: 'light fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
				}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 21"
								>
									<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
									<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
								</svg>
								<Link to="/dashboard" className="ml-3">
									Dashboard
								</Link>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 18"
								>
									<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
								</svg>
								<Link
									to="/"
									className="flex-1 ml-3 whitespace-nowrap"
								>
									Home Page
								</Link>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
								</svg>
								<Link
									to="admin"
									className="flex-1 ml-3 whitespace-nowrap"
								>
									Admin
								</Link>
								<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
									3
								</span>
							</a>
						</li>
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<svg
									className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 18 16"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
									/>
								</svg>
								<button className="ml-3 whitespace-nowrap">
									Log Out
								</button>
							</a>
						</li>

						<li>
							<a
								href="#"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
							>
								<span
									onClick={() => window.location.reload()}
									className="flex-1 whitespace-nowrap"
								>
									<Theme />
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
			<div className="p-4 sm:ml-64">
				<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
					{/* Modal toggle */}
					<div className="flex w-full justify-between mb-6 mt-4">
						<button
							data-modal-target="default-modal"
							data-modal-toggle="default-modal"
							className="py-2.5 px-5 mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
							type="button"
						>
							Toggle modal
						</button>
						<Avatar className={theme == 'light' ? 'light' : 'dark'}>
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
					{/* Main modal */}
					<div
						id="default-modal"
						tabIndex={-1}
						aria-hidden="true"
						className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
					>
						<div
							className={
								theme == 'light'
									? 'relative w-full max-w-2xl max-h-full light'
									: 'relative w-full max-w-2xl max-h-full dark'
							}
						>
							{/* Modal content */}
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
								{/* Modal header */}
								<div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										Edit
									</h3>
									<button
										type="button"
										className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
										data-modal-hide="default-modal"
									>
										<svg
											className="w-3 h-3"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 14"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
											/>
										</svg>
										<span className="sr-only">
											Close modal
										</span>
									</button>
								</div>
								{/* Modal body */}
								<div className="p-6 space-y-6">
									<form>
										<div className="mb-6">
											<label
												htmlFor="title"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Collection Title*
											</label>
											<input
												type="text"
												id="title"
												className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
												placeholder="Collection Title*"
												required=""
											/>
										</div>
										<div className="mb-6">
											<label
												htmlFor="description"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Collection Description*
											</label>
											<input
												type="text"
												id="description"
												className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
												required=""
												placeholder="Collection Description*"
											/>
										</div>
										<div className="mb-6">
											<label
												htmlFor="tags"
												className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
											>
												Collection Tags*
											</label>
											<input
												type="text"
												id="tags"
												className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
												required=""
												placeholder="Collection Tags*"
											/>
										</div>
										<div>
											<div className="flex items-center justify-center w-full">
												<label
													htmlFor="dropzone-file"
													className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
												>
													<div className="flex flex-col items-center justify-center pt-5 pb-6">
														<svg
															className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 20 16"
														>
															<path
																stroke="currentColor"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
															/>
														</svg>
														<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
															<span className="font-semibold">
																Click to upload
															</span>{' '}
															or drag and drop
														</p>
														<p className="text-xs text-gray-500 dark:text-gray-400">
															PNG, JPG or JPEG
														</p>
													</div>
													<input
														id="dropzone-file"
														type="file"
														className="hidden"
														accept="image/png, image/jpg, image/jpeg"
													/>
												</label>
											</div>
										</div>
									</form>
								</div>
								{/* Modal footer */}
								<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
									<button
										data-modal-hide="default-modal"
										type="button"
										className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
									>
										Edit
									</button>
									<button
										data-modal-hide="default-modal"
										type="button"
										className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
									>
										Decline
									</button>
								</div>
							</div>
						</div>
					</div>

					<ul
						className={
							theme == 'light'
								? 'flex gap-4 flex-wrap light'
								: 'flex gap-4 flex-wrap dark'
						}
					>
						<li className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="flex justify-end px-4 pt-4">
								<Menubar>
									<MenubarMenu>
										<MenubarTrigger>...</MenubarTrigger>
										<MenubarContent>
											<MenubarItem>
												Edit Collection
											</MenubarItem>
											<MenubarItem>
												Remove Collection
											</MenubarItem>
										</MenubarContent>
									</MenubarMenu>
								</Menubar>
							</div>
							<div className="flex flex-col items-center pb-5">
								<img
									className="w-60 rounded-2xl mt-3 mb-3 shadow-lg"
									src="https://picsum.photos/200"
									alt="Bonnie image"
								/>
								<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
									Bonnie Green
								</h5>
								<span className="text-sm text-center px-4 text-gray-500 dark:text-gray-400">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Ducimus provident ut
									minima ea impedit doloribus pariatur
									consectetur delectus asperiores hic?
								</span>
								<ul className="flex flex-wrap gap-2">
									<li>#hello</li>
									<li>#hello</li>
								</ul>
							</div>
						</li>
						<li className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="flex justify-end px-4 pt-4">
								<Menubar>
									<MenubarMenu>
										<MenubarTrigger>...</MenubarTrigger>
										<MenubarContent>
											<MenubarItem>
												Edit Collection
											</MenubarItem>
											<MenubarItem>
												Remove Collection
											</MenubarItem>
										</MenubarContent>
									</MenubarMenu>
								</Menubar>
							</div>
							<div className="flex flex-col items-center pb-5">
								<img
									className="w-60 rounded-2xl mt-3 mb-3 shadow-lg"
									src="https://picsum.photos/200"
									alt="Bonnie image"
								/>
								<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
									Bonnie Green
								</h5>
								<span className="text-sm text-center px-4 text-gray-500 dark:text-gray-400">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Ducimus provident ut
									minima ea impedit doloribus pariatur
									consectetur delectus asperiores hic?
								</span>
								<ul className="flex flex-wrap gap-2">
									<li>#hello</li>
									<li>#hello</li>
								</ul>
							</div>
						</li>
						<li className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="flex justify-end px-4 pt-4">
								<Menubar>
									<MenubarMenu>
										<MenubarTrigger>...</MenubarTrigger>
										<MenubarContent>
											<MenubarItem>
												Edit Collection
											</MenubarItem>
											<MenubarItem>
												Remove Collection
											</MenubarItem>
										</MenubarContent>
									</MenubarMenu>
								</Menubar>
							</div>
							<div className="flex flex-col items-center pb-5">
								<img
									className="w-60 rounded-2xl mt-3 mb-3 shadow-lg"
									src="https://picsum.photos/200"
									alt="Bonnie image"
								/>
								<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
									Bonnie Green
								</h5>
								<span className="text-sm text-center px-4 text-gray-500 dark:text-gray-400">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Ducimus provident ut
									minima ea impedit doloribus pariatur
									consectetur delectus asperiores hic?
								</span>
								<ul className="flex flex-wrap gap-2">
									<li>#hello</li>
									<li>#hello</li>
								</ul>
							</div>
						</li>
						<li className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="flex justify-end px-4 pt-4">
								<Menubar>
									<MenubarMenu>
										<MenubarTrigger>...</MenubarTrigger>
										<MenubarContent>
											<MenubarItem>
												Edit Collection
											</MenubarItem>
											<MenubarItem>
												Remove Collection
											</MenubarItem>
										</MenubarContent>
									</MenubarMenu>
								</Menubar>
							</div>
							<div className="flex flex-col items-center pb-5">
								<img
									className="w-60 rounded-2xl mt-3 mb-3 shadow-lg"
									src="https://picsum.photos/200"
									alt="Bonnie image"
								/>
								<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
									Bonnie Green
								</h5>
								<span className="text-sm text-center px-4 text-gray-500 dark:text-gray-400">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Ducimus provident ut
									minima ea impedit doloribus pariatur
									consectetur delectus asperiores hic?
								</span>
								<ul className="flex flex-wrap gap-2">
									<li>#hello</li>
									<li>#hello</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
