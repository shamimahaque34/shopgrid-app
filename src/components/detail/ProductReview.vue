<template>
<div class="product-review">
    <div class="row">
    <div class="col-lg-4 col-12">
<div class="single-block give-review">
<h4>4.5 (Overall)</h4>
<ul>
<li>
<span>5 stars - 38</span>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
</li>
<li>
<span>4 stars - 10</span>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star"></i>
</li>
<li>
<span>3 stars - 3</span>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star"></i>
<i class="lni lni-star"></i>
</li>
<li>
<span>2 stars - 1</span>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star"></i>
<i class="lni lni-star"></i>
<i class="lni lni-star"></i>
</li>
<li>
<span>1 star - 0</span>
<i class="lni lni-star-filled"></i>
<i class="lni lni-star"></i>
 <i class="lni lni-star"></i>
<i class="lni lni-star"></i>
<i class="lni lni-star"></i>
</li>
</ul>

<button type="button" class="btn review-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
Leave a Review
</button>
</div>
</div>
<div class="col-lg-8 col-12">
<div class="single-block">
<div class="reviews">
<h4 class="title">Latest Reviews</h4>

<div class="single-review">
<img src="assets/images/blog/comment1.jpg" alt="#">
<div class="review-info">
<h4>Awesome quality for the price
<span>Jacob Hammond
</span>
</h4>
<ul class="stars">
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor...</p>
</div>
</div>


<div class="single-review">
<img src="assets/images/blog/comment2.jpg" alt="#">
<div class="review-info">
<h4>My husband love his new...
<span>Alex Jaza
</span>
</h4>
<ul class="stars">
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star"></i></li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor...</p>
</div>
</div>


<div class="single-review">
<img src="assets/images/blog/comment3.jpg" alt="#">
<div class="review-info">
<h4>I love the built quality...
<span>Jacob Hammond
</span>
</h4>
 <ul class="stars">
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
<li><i class="lni lni-star-filled"></i></li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor...</p>
</div>
</div>

</div>
</div>
</div>
</div>
</div>

<div class="modal fade review-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Leave a Review</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<div class="row">
<div class="col-sm-6">
<div class="form-group">
<label for="review-name">Your Name</label>
<input class="form-control" type="text" id="review-name" required>
</div>
</div>
<div class="col-sm-6">
<div class="form-group">
<label for="review-email">Your Email</label>
<input class="form-control" type="email" id="review-email" required>
</div>
</div>
</div>
<div class="row">
<div class="col-sm-6">
<div class="form-group">
<label for="review-subject">Subject</label>
<input class="form-control" type="text" id="review-subject" required>
</div>
</div>
<div class="col-sm-6">
<div class="form-group">
<label for="review-rating">Rating</label>
<select class="form-control" id="review-rating">
<option>5 Stars</option>
<option>4 Stars</option>
<option>3 Stars</option>
<option>2 Stars</option>
<option>1 Star</option>
</select>
</div>
</div>
</div>
<div class="form-group">
<label for="review-message">Review</label>
<textarea class="form-control" id="review-message" rows="8" required></textarea>
</div>
</div>
<div class="modal-footer button">
<button type="button" class="btn">Submit Review</button>
</div>
</div>
</div>
</div>

    
</template>


<script>
export default {
    name:'ProductReview'
    
}
</script>

<style scoped>

</style>