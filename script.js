/* ==================================================
   YouMovie - Complete JavaScript
   ================================================== */


/* ==================================================
   SEARCH + CATEGORY SYSTEM
   ================================================== */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const videos =
    document.querySelectorAll(".searchable");

const categories =
    document.querySelectorAll(".category");

let selectedCategory = "all";


function filterVideos() {

    if (!videos.length) return;

    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

    videos.forEach(function(video) {

        const videoText =
            video.innerText.toLowerCase();

        const videoCategory =
            video.dataset.category;

        const matchesSearch =
            videoText.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            videoCategory === selectedCategory;


        if (matchesSearch && matchesCategory) {

            video.style.display = "block";

        } else {

            video.style.display = "none";

        }

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterVideos
    );

}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        filterVideos
    );

}


categories.forEach(function(category) {

    category.addEventListener(
        "click",
        function() {

            categories.forEach(function(item) {

                item.classList.remove("active");

            });


            category.classList.add("active");


            selectedCategory =
                category.dataset.category;


            filterVideos();

        }
    );

});



/* ==================================================
   VIDEO UPLOAD
   ================================================== */

const publishButton =
    document.getElementById("publishButton");


if (publishButton) {

    publishButton.addEventListener(
        "click",
        function() {

            const videoElement =
                document.getElementById("videoFile");

            const thumbnailElement =
                document.getElementById("thumbnailFile");

            const titleElement =
                document.getElementById("videoTitle");

            const descriptionElement =
                document.getElementById("videoDescription");

            const categoryElement =
                document.getElementById("videoCategory");

            const visibilityElement =
                document.querySelector(
                    'input[name="visibility"]:checked'
                );

            const message =
                document.getElementById("uploadMessage");


            const video =
                videoElement
                    ? videoElement.files[0]
                    : null;


            const thumbnail =
                thumbnailElement
                    ? thumbnailElement.files[0]
                    : null;


            const title =
                titleElement
                    ? titleElement.value.trim()
                    : "";


            const description =
                descriptionElement
                    ? descriptionElement.value.trim()
                    : "";


            const category =
                categoryElement
                    ? categoryElement.value
                    : "";


            const visibility =
                visibilityElement
                    ? visibilityElement.value
                    : "public";


            if (!video) {

                message.textContent =
                    "Please select a video.";

                return;

            }


            if (!title) {

                message.textContent =
                    "Please enter a video title.";

                return;

            }


            if (!category) {

                message.textContent =
                    "Please select a category.";

                return;

            }


            message.textContent =
                "Video is ready to publish as " +
                visibility + ".";


            console.log("Video:", video.name);

            console.log(
                "Thumbnail:",
                thumbnail
                    ? thumbnail.name
                    : "No thumbnail"
            );

            console.log(
                "Title:",
                title
            );

            console.log(
                "Description:",
                description
            );

            console.log(
                "Category:",
                category
            );

            console.log(
                "Visibility:",
                visibility
            );

        }
    );

}



/* ==================================================
   VIDEO PREVIEW
   ================================================== */

const videoFile =
    document.getElementById("videoFile");

const videoPreview =
    document.getElementById("videoPreview");


if (videoFile && videoPreview) {

    videoFile.addEventListener(
        "change",
        function() {

            const file =
                this.files[0];


            if (!file) {

                videoPreview.style.display =
                    "none";

                return;

            }


            const videoURL =
                URL.createObjectURL(file);


            videoPreview.src =
                videoURL;


            videoPreview.style.display =
                "block";

        }
    );

}



/* ==================================================
   THUMBNAIL PREVIEW
   ================================================== */

const thumbnailFile =
    document.getElementById("thumbnailFile");

const thumbnailPreview =
    document.getElementById("thumbnailPreview");


if (thumbnailFile && thumbnailPreview) {

    thumbnailFile.addEventListener(
        "change",
        function() {

            const file =
                this.files[0];


            if (!file) {

                thumbnailPreview.style.display =
                    "none";

                return;

            }


            const imageURL =
                URL.createObjectURL(file);


            thumbnailPreview.src =
                imageURL;


            thumbnailPreview.style.display =
                "block";

        }
    );

}



/* ==================================================
   PUBLISH PREVIEW
   ================================================== */

const previewTitle =
    document.getElementById("videoTitle");

const previewCategory =
    document.getElementById("videoCategory");

const publishPreview =
    document.getElementById("publishPreview");

const publishPreviewImage =
    document.getElementById("publishPreviewImage");

const publishPreviewTitle =
    document.getElementById("publishPreviewTitle");

const publishPreviewCategory =
    document.getElementById("publishPreviewCategory");


function updatePublishPreview() {

    if (!publishPreview) return;


    publishPreview.style.display =
        "block";


    if (previewTitle && publishPreviewTitle) {

        publishPreviewTitle.textContent =
            previewTitle.value.trim() ||
            "Video Title";

    }


    if (previewCategory &&
        publishPreviewCategory) {

        publishPreviewCategory.textContent =
            previewCategory.value ||
            "Category";

    }

}


if (previewTitle) {

    previewTitle.addEventListener(
        "input",
        updatePublishPreview
    );

}


if (previewCategory) {

    previewCategory.addEventListener(
        "change",
        updatePublishPreview
    );

}


if (thumbnailFile &&
    publishPreviewImage) {

    thumbnailFile.addEventListener(
        "change",
        function() {

            const file =
                this.files[0];


            if (!file) return;


            const imageURL =
                URL.createObjectURL(file);


            publishPreviewImage.src =
                imageURL;


            updatePublishPreview();

        }
    );

}



/* ==================================================
   LOGIN
   ================================================== */

const loginButton =
    document.getElementById("loginButton");


if (loginButton) {

    loginButton.addEventListener(
        "click",
        function() {

            const username =
                document.getElementById(
                    "loginUser"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            if (!username || !password) {

                message.textContent =
                    "Please enter your username and password.";

                return;

            }


            message.textContent =
                "Demo login successful.";

        }
    );

}



/* ==================================================
   REGISTER
   ================================================== */

const registerButton =
    document.getElementById("registerButton");


if (registerButton) {

    registerButton.addEventListener(
        "click",
        function() {

            const username =
                document.getElementById(
                    "registerUsername"
                ).value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirm =
                document.getElementById(
                    "registerConfirm"
                ).value;


            const message =
                document.getElementById(
                    "registerMessage"
                );


            if (
                !username ||
                !email ||
                !password ||
                !confirm
            ) {

                message.textContent =
                    "Please fill in all fields.";

                return;

            }


            if (password !== confirm) {

                message.textContent =
                    "Passwords do not match.";

                return;

            }


            if (password.length < 6) {

                message.textContent =
                    "Password must be at least 6 characters.";

                return;

            }


            message.textContent =
                "Demo account created successfully.";

        }
    );

}