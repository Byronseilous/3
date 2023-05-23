
const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    const post_id = event.currentTarget.getAttribute('post-id');

    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ post_id, content }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to add comment');
    }
};

$('#new-comment-form').on('submit', newCommentFormHandler);
