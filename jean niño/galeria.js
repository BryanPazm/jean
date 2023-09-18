        // Función para mostrar la galería de imágenes
        function showGallery(images) {
            const gallery = document.getElementById('imageGallery');
            const galleryImage = document.getElementById('galleryImage');
            galleryImage.src = images[0];
            gallery.style.display = 'block';

            // Mostrar la siguiente imagen al hacer clic en la actual
            let currentIndex = 0;
            galleryImage.onclick = function () {
                currentIndex = (currentIndex + 1) % images.length;
                galleryImage.src = images[currentIndex];
            };
        }

        // Función para cerrar la galería de imágenes
        function closeGallery() {
            const gallery = document.getElementById('imageGallery');
            gallery.style.display = 'none';
        }