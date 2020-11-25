import Head from 'next/head';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    fullName: string;
    email: string;
    password: string;
};

const Landing: FunctionComponent = () => {
    const { register, handleSubmit, errors } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (values) => {
        console.log(values);
    };

    return (
        <section className="bg-gray-800">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content="" />
                <meta name="keywords" content="" />

                <title>Emaily</title>
            </Head>

            <div className="px-4 mx-auto max-w-7xl md:px-6">
                <div className="flex items-center justify-between py-6">
                    <Link href="/">
                        <a className="">Emaily</a>
                    </Link>

                    <nav className="flex items-center">
                        <Link href="#">
                            <a className="px-3 py-2 font-medium text-gray-100 transition bg-gray-700 rounded-md shadow hover:shadow-md hover:bg-gray-600">
                                Log in
                            </a>
                        </Link>
                    </nav>
                </div>
                <div className="pt-12 pb-20 lg:flex lg:items-center">
                    <div className="pb-16 lg:w-1/2 lg:pb-0">
                        <div className="lg:text-left sm:text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">
                                    Data to enrich your
                                </span>
                                <span className="block text-indigo-500 xl:inline">
                                    online business
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Earum, temporibus quo nulla
                                amet officia ad corporis praesentium dolorem
                                deleniti molestias culpa, possimus provident
                                labore atque asperiores neque sed, vel cumque.
                            </p>
                        </div>
                    </div>
                    <div className="-mx-4 lg:w-1/2 sm:mx-0">
                        <div className="mx-auto overflow-hidden divide-y-2 divide-gray-200 sm:rounded-md sm:max-w-md">
                            <div className="px-4 py-6 bg-white lg:px-8 sm:px-6">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">
                                        Sign in with
                                    </p>
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <span
                                            role="button"
                                            className="flex items-center justify-center p-2 text-gray-500 transition border border-gray-300 rounded-md shadow-sm hover:text-gray-700"
                                        >
                                            <span className="sr-only">
                                                Facebook
                                            </span>
                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 512 512"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M512 257.56c0-141.39-114.62-256-256-256-141.39 0-256 114.62-256 256 0 127.78 93.62 233.69 216 252.89V331.56h-65v-74h65v-56.4c0-64.16 38.22-99.6 96.69-99.6 28.01 0 57.31 5 57.31 5v63h-32.28c-31.8 0-41.72 19.73-41.72 39.98v48.02h71l-11.35 74H296v178.89c122.38-19.21 216-125.12 216-252.89"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span
                                            role="button"
                                            className="flex items-center justify-center p-2 text-gray-500 transition border border-gray-300 rounded-md shadow-sm hover:text-gray-700"
                                        >
                                            <span className="sr-only">
                                                Twitter
                                            </span>
                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 512 416.32"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9.01-.2-13.52 20.49-14.75 38.31-33.4 52.45-54.5-18.85 8.4-39.13 13.93-60.44 16.6 21.72-12.91 38.31-33.6 46.3-58.19-20.28 12.09-42.82 20.69-66.79 25.41C411.81 12.7 384.56 0 354.45 0c-57.98 0-105.1 47.12-105.1 105.1 0 8.2 1.02 16.19 2.66 23.97-87.28-4.3-164.73-46.3-216.56-109.82-9.01 15.57-14.14 33.6-14.14 52.86 0 36.47 18.64 68.64 46.71 87.48a106.24 106.24 0 01-47.53-13.11v1.43c0 50.81 36.26 93.43 84.21 103.06-8.81 2.46-18.03 3.69-27.66 3.69-6.76 0-13.32-.61-19.67-1.84 13.32 41.8 52.24 72.12 98.14 72.94-36.06 28.28-81.34 45.08-130.51 45.08-8.4 0-16.8-.41-25-1.43 46.3 29.5 101.62 46.91 160.83 46.91"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span
                                            role="button"
                                            className="flex items-center justify-center p-2 text-gray-500 transition border border-gray-300 rounded-md shadow-sm hover:text-gray-700"
                                        >
                                            <span className="sr-only">
                                                GitHub
                                            </span>
                                            <svg
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative mt-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 text-gray-500 bg-white">
                                            Or
                                        </span>
                                    </div>
                                </div>
                                <form
                                    className="grid grid-cols-1 gap-5 mt-4"
                                    noValidate={true}
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <label className="">
                                        <span className="sr-only">
                                            Full name
                                        </span>
                                        <input
                                            type="text"
                                            name="fullName"
                                            ref={register({ required: true })}
                                            placeholder="Full name"
                                            className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-200 focus:border-indigo-300"
                                            aria-invalid={
                                                errors.fullName && 'true'
                                            }
                                        />
                                    </label>
                                    <label className="">
                                        <span className="sr-only">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            ref={register({ required: true })}
                                            placeholder="Email"
                                            className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-200 focus:border-indigo-300"
                                            aria-invalid={
                                                errors.email && 'true'
                                            }
                                        />
                                    </label>
                                    <label className="">
                                        <span className="sr-only">
                                            Password
                                        </span>
                                        <input
                                            type="password"
                                            name="password"
                                            ref={register({ required: true })}
                                            placeholder="Password"
                                            className="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-200 focus:border-indigo-300"
                                            aria-invalid={
                                                errors.password && 'true'
                                            }
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        Create your account
                                    </button>
                                </form>
                            </div>
                            <div className="px-4 py-6 bg-gray-100 lg:px-8 sm:px-6">
                                <p className="text-xs leading-relaxed text-gray-600">
                                    By signing up, you agree to our{' '}
                                    <Link href="#">
                                        <a className="font-semibold text-gray-800 hover:underline">
                                            Terms
                                        </a>
                                    </Link>
                                    ,{' '}
                                    <Link href="#">
                                        <a className="font-semibold text-gray-800 hover:underline">
                                            Data Policy
                                        </a>
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="#">
                                        <a className="font-semibold text-gray-800 hover:underline">
                                            Cookies Policy
                                        </a>
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
