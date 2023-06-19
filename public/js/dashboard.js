
const newPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to post');
        }
    }
};


const updateButtonHandler = async (event) => {
    const form = $(event.currentTarget).closest('form');
    const title = form.find('.post-title').val().trim();
    const content = form.find('.post-content').val().trim();
    const id = form.attr('post-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
            'Content-type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }
};


const delButtonHandler = async (event) => {
    const form = $(event.currentTarget).closest('form');
    const id = form.attr('post-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post');
    }
};

$('#new-post-form form').on('submit', newPostFormHandler);

$('.updatePost').on('click', updateButtonHandler);

$('.deletePost').on('click', delButtonHandler);

$('#newPost').click(() => {
    $('#new-post-form').removeClass('d-none');
});

$('.showPost').click(e => {
    $(e.currentTarget).prev().removeClass('d-none');
});
