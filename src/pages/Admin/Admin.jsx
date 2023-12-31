import { Link } from 'react-router-dom';
import { Theme } from '../../components/Theme/Theme';
import { MenuBar } from '../../components/MenuBar/MenuBar';
import { useContext } from 'react';
import { Context } from '../../App';

export const Admin = () => {
	const theme = localStorage.getItem('theme');

	return (
		<div
			className={
				theme == 'light'
					? 'bg-gray-50 dark:bg-gray-900 dark'
					: 'bg-gray-50 dark:bg-gray-900 light'
			}
		>
			<section
				className={
					theme == 'light'
						? 'h-screen dark bg-gray-50 dark:bg-gray-900 p-3 sm:p-5'
						: 'h-screen bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 light'
				}
			>
				<div className="mx-auto max-w-screen-xl px-4 lg:px-12">
					<header className="flex items-center justify-between py-5">
						<Link to="/">&#8592; Back</Link>
						<Theme />
					</header>
					<div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
						<div className="overflow-x-auto">
							<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
								<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
									<tr>
										<th scope="col" className="px-4 py-3">
											User name
										</th>
										<th scope="col" className="px-4 py-3">
											Email
										</th>
										<th scope="col" className="px-4 py-3">
											Type
										</th>
										<th scope="col" className="px-4 py-3">
											Registration Date
										</th>
										<th scope="col" className="px-4 py-3">
											Price
										</th>
										<th scope="col" className="px-4 py-3">
											<span className="sr-only">
												Actions
											</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Apple iMac 27"
										</th>
										<td className="px-4 py-3">PC</td>
										<td className="px-4 py-3">Apple</td>
										<td className="px-4 py-3">300</td>
										<td className="px-4 py-3">$2999</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<MenuBar />
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Apple iMac 20"
										</th>
										<td className="px-4 py-3">PC</td>
										<td className="px-4 py-3">Apple</td>
										<td className="px-4 py-3">200</td>
										<td className="px-4 py-3">$1499</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="apple-imac-20-dropdown-button"
												data-dropdown-toggle="apple-imac-20-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="apple-imac-20-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="apple-imac-20-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Apple iPhone 14
										</th>
										<td className="px-4 py-3">Phone</td>
										<td className="px-4 py-3">Apple</td>
										<td className="px-4 py-3">1237</td>
										<td className="px-4 py-3">$999</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="apple-iphone-14-dropdown-button"
												data-dropdown-toggle="apple-iphone-14-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="apple-iphone-14-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="apple-iphone-14-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Apple iPad Air
										</th>
										<td className="px-4 py-3">Tablet</td>
										<td className="px-4 py-3">Apple</td>
										<td className="px-4 py-3">4578</td>
										<td className="px-4 py-3">$1199</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="apple-ipad-air-dropdown-button"
												data-dropdown-toggle="apple-ipad-air-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="apple-ipad-air-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="apple-ipad-air-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Xbox Series S
										</th>
										<td className="px-4 py-3">
											Gaming/Console
										</td>
										<td className="px-4 py-3">Microsoft</td>
										<td className="px-4 py-3">56</td>
										<td className="px-4 py-3">$299</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="xbox-series-s-dropdown-button"
												data-dropdown-toggle="xbox-series-s-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="xbox-series-s-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="xbox-series-s-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											PlayStation 5
										</th>
										<td className="px-4 py-3">
											Gaming/Console
										</td>
										<td className="px-4 py-3">Sony</td>
										<td className="px-4 py-3">78</td>
										<td className="px-4 py-3">$799</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="playstation-5-dropdown-button"
												data-dropdown-toggle="playstation-5-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="playstation-5-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="playstation-5-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Xbox Series X
										</th>
										<td className="px-4 py-3">
											Gaming/Console
										</td>
										<td className="px-4 py-3">Microsoft</td>
										<td className="px-4 py-3">200</td>
										<td className="px-4 py-3">$699</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="xbox-series-x-dropdown-button"
												data-dropdown-toggle="xbox-series-x-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="xbox-series-x-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="xbox-series-x-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Apple Watch SE
										</th>
										<td className="px-4 py-3">Watch</td>
										<td className="px-4 py-3">Apple</td>
										<td className="px-4 py-3">657</td>
										<td className="px-4 py-3">$399</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="apple-watch-se-dropdown-button"
												data-dropdown-toggle="apple-watch-se-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="apple-watch-se-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="apple-watch-se-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											NIKON D850
										</th>
										<td className="px-4 py-3">Photo</td>
										<td className="px-4 py-3">Nikon</td>
										<td className="px-4 py-3">465</td>
										<td className="px-4 py-3">$599</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="nikon-d850-dropdown-button"
												data-dropdown-toggle="nikon-d850-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="nikon-d850-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="nikon-d850-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
									<tr className="border-b dark:border-gray-700">
										<th
											scope="row"
											className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Monitor BenQ EX2710Q
										</th>
										<td className="px-4 py-3">
											TV/Monitor
										</td>
										<td className="px-4 py-3">BenQ</td>
										<td className="px-4 py-3">354</td>
										<td className="px-4 py-3">$499</td>
										<td className="px-4 py-3 flex items-center justify-end">
											<button
												id="benq-ex2710q-dropdown-button"
												data-dropdown-toggle="benq-ex2710q-dropdown"
												className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
												type="button"
											>
												<svg
													className="w-5 h-5"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
												</svg>
											</button>
											<div
												id="benq-ex2710q-dropdown"
												className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
											>
												<ul
													className="py-1 text-sm text-gray-700 dark:text-gray-200"
													aria-labelledby="benq-ex2710q-dropdown-button"
												>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Show
														</a>
													</li>
													<li>
														<a
															href="#"
															className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
														>
															Edit
														</a>
													</li>
												</ul>
												<div className="py-1">
													<a
														href="#"
														className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
													>
														Delete
													</a>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
