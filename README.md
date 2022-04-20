
# Setup
To edit the content, editing files on GitHub should suffice.  For developing the layout, running `jekyll` locally might be useful and you should follow the following steps.

Using [rbenv](https://github.com/rbenv/rbenv) and [ruby-build](https://github.com/rbenv/ruby-build) to setup an independent ruby environment compatible with (GitHub Pages](https://pages.github.com/versions/).

    rbenv install 2.7.3
    rbenv local 2.7.3
    gem install jekyll bundler

Create the page:

    jekyll new website
    cd website/

Build and show page:

    bundle exec jekyll serve
