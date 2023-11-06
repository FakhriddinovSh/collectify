import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Theme } from '../../components/Theme/Theme';

export const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email format')
				.required('Email required'),
			password: Yup.string()
				.min(2, 'Password must be longer than 2!')
				.max(8, 'Maximum Password length must be 8!')
				.required('Password required'),
		}),
	});

	return (
		<div className="flex flex-col h-screen">
			<div className="right-10 top-5 absolute">
				<Theme />
			</div>
			<div
				className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-3xl mx-auto mt-16"
				style={{ width: '432px' }}
				data-v0-t="card"
			>
				<div className="flex flex-col space-y-1.5 p-6">
					<h3 className="text-2xl font-semibold leading-none tracking-tight">
						Login
					</h3>
					<p className="text-sm text-muted-foreground">
						Enter user details to Login
					</p>
					<Link
						to="/register"
						className="text-sm text-blue-500 inline-block"
					>
						Don't have an account?
					</Link>
				</div>
				<div className="px-6 pb-6">
					<form onSubmit={formik.handleSubmit} className="space-y-4">
						<div className="space-y-4">
							<div className="space-y-2 relative">
								<label
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									id="email"
									placeholder="johndoe@example.com"
									required
									type="text"
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								<span className="absolute -bottom-4 text-xs text-red-500 font-bold">
									{formik.errors.email}
								</span>
							</div>
							<div className="space-y-2 relative">
								<label
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
									id="password"
									required=""
									placeholder="Enter your password"
									type="password"
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
								<span className="absolute -bottom-4 text-xs text-red-500 font-bold">
									{formik.errors.password}
								</span>
							</div>
						</div>
						<button
							className="block w-full rounded py-2 pb-2 bg-black text-white"
							type="submit"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
