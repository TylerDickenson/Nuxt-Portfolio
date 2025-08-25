<template>
    <footer class="bg-gray-200 h-[35vh] w-screen -mb-8 flex items-center" id="footer">
        <div class="max-w-5xl mx-auto px-8">
            <div class="grid grid-cols-3 items-center gap-8">
                <div class="text-gray-600 text-center">
                    <p class="font-centurion font-semibold text-lg mb-1">Get in touch</p>
                    <p class="text-md">TJDickenson@gmail.com</p>
                    <p class="text-md">+44 7944 158 387</p>
                </div>
                
                <div class="flex justify-center">
                    <div class="w-px h-32 bg-gray-400"></div>
                </div>
                
                <div class="text-gray-600 text-center ">
                    <p class="font-centurion font-semibold text-lg mb-1">Other Information</p>

                    <p class="mb-1">
                        Located In Cardiff, UK
                    </p>
                    <p class="mb-2">
                        Timezone: GMT 
                    </p>
                    <p class="text-md whitespace-nowrap">
                        &copy; {{ new Date().getFullYear() }} Tyler Dickenson. All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    </footer>


</template>