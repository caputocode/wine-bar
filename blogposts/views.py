from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Post
from .forms import BlogPostForm
from django.contrib.auth.decorators import login_required

def get_posts(request):
    """
    Create a view that will return a list
    of posts that were published prior to 
    'now' and render them to the 'blog-page.html'
    template
    """
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    return render(request, 'blogposts.html', {'posts': posts})

def post_detail(request, pk):
    """
    Create a view that returns a single post object
    based on the post ID (pk) and render it to the
    'postdetail.html' template. Or return a 404 error
    if the post is not found
    """
    post = get_object_or_404(Post, pk=pk)
    post.views += 1
    post.save()
    return render(request, 'post-detail.html', {'post': post})

@login_required()
def create_or_edit_post(request, pk=None):
    """
    Create a view that allows user to create or edit
    a post depending if the Post Id is null or not
    """
    
    post = get_object_or_404(Post, pk=pk) if pk else None
    if request.method == 'POST':
        form = BlogPostForm(request.POST, request.FILES, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect(post_detail, post.pk)
    else:
        form = BlogPostForm(instance=post)
    return render(request, 'new-post.html', {'form': form})