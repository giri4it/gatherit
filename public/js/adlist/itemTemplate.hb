<div class="row clearfix" style="vertical-align:middle">
	<div class="col-md-2 column">
    	<p>{{ ad_id }}</p>
	</div>
	<div class="col-md-2 column">
    	<p>{{ file_type }}</p>
	</div>
	<div class="col-md-2 column">
        <p>{{ file_description }}</p>
    </div>
	<div class="col-md-2 column">
    	<p><img src="/getthumbimage?ad_id={{ad_id}}&user_id={{user_fk}}"></img></p>
	</div>
	<div class="col-md-2 column" id="image{{ ad_id}}">
		<button id="btnPushImage" class="btn btn-primary"> Push Ad </button>
	</div>
</div>
<hr>

