import React from 'react';

const Footer = () => {
    return (
        <footer class="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-zinc-700 mt-10">
            <span class="text-sm sm:text-center text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:text-white">Mahbuba</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-400 dark:text-gray-400 sm:mt-0">
                <li>
                    <p class="hover:text-white">Email: mahbubaakhter22@gmail.com</p>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;