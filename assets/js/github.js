
jQuery.fn.loadRepositories = function(username, filterRule) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
     
    var target = this;
    var type = 'all'; // Can be one of all, owner, public, private, member
    var sort = 'pushed'; // Can be one of created, updated, pushed, full_name

    jQuery.getJSON('https://api.github.com/users/'+username+'/repos?type='+type+'&sort='+sort+'&callback=?').
        done(function( response ) {

            var repos = response.data.filter(filterRule);
            var list = $('<dl/>');
            $(repos).each(function() {
                list.append('<dt><a href="'+ (this.homepage?this.homepage:this.html_url) +'">' + this.name + '</a> <em>'+(this.language?('('+this.language+')'):'')+'</em></dt>');
                list.append('<dd>' + this.description +'</dd>');
            });
            target.empty().append(list);

        }).fail(function( jqxhr, textStatus, error ) {

            var err = textStatus + ", " + error;
            this.html("<span>Request Failed: "+err+" </span>");
    });
      
};