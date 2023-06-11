import React from 'react';
import { NavLink } from 'react-router-dom';



const ErrorPage = () => {
    return (
        <>
            <section class="flex items-center h-full p-16 mt-10">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span class="sr-only">Error</span>404
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<NavLink  rel="noopener noreferrer" to='/' href="#" className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">Back to homepage</NavLink>
		</div>
	</div>
</section>
        </>
    )
}

export default ErrorPage;
