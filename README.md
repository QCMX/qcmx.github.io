This webpage is hosted via GitHub Pages.

To do:

  * Timeline responsive
  * Accent color
  * Link to PMC & Ecole Polytechnique.
  * Remove Landry and JD from navigation?
  * GDPR, legal notice
  * Page descriptions for SEO
  * DNS

# Editing
## GitHub workflow
There are two repositories, the [main website](https://github.com/QCMX/qcmx.github.io) and a [test website](https://github.com/QCMX/website). Each of them deploys a webpage via GitHub Pages to https://qcmx.github.io and https://qcmx.github.io/website

The webpage has to be compiled with jekyll, which is done automatically by GitHub Pages after each commit. For development and previewing changes, we need to build the webpage before deploying to `qcmx.fr`. This is possible by running jekyll locally (see instructions below), but we avoid having to install the whole environment by using the test repository.

The easiest way is to edit content directly on GitHub in the test repository and committing to the `gh-pages` branch.  After about a minute, the changes become visible on https://qcmx.github.io/website

If the changes look good, create a pull request to merge into the main webpage:
* In any of the two repositories click [Pull requests](https://github.com/QCMX/qcmx.github.io/pulls)
* and then `New pull request`
* click the link `compare across forks`
* select base repository `QCMX/qcmx.github.io` (branch `gh-pages`) and  
  head repository `QCMX/website` (branch `gh-pages`)
* Select any of the options you want, eg. reviewers for the pull request.
* Click `Create pull request`
* In the now open pull request, select `Squash and merge` or `Rebase and merge` from the dropdown, because that's [nicer than `Merge pull request`](https://medium.com/swlh/squash-and-rebase-git-basics-5cb1be1e0dac). Then do the thing! (Click twice to confirm)

It will take a minute to deploy the new webpage. Use `Ctrl+Shift+R` to reload all caches in your browser and see new content.

When developing locally it is of course possible to push to a new branch in `QCMX/qcmx.github.io` or to the branch `gh-pages` in `QCMX/website`, and afterwards create & merge the pull request.

## Jekyll templating
For explanations on how to configure the page see the [documentation for Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/configuration/), the used theme.

**Don't skip over putting descriptions and captions for disabled people and credit attributes for pictures.**

## Email obfuscation
Email obfuscation helps fight spam.  To this end the `href` attribute is encoded using ROT-13.  After DOM load the `href` attribute of all elements with the `decode-href` class are automatically decoded.

The e-mail is written in encoded form in the source code.  To encode an e-mail link open the developer console and type `rot('name@example.com')`.

Then the `decode-href` class has to be added to the HTML. The `author_profile` and `teamgrid` includes support the `decode: true` setting to achieve this. `author_profile` should include `mailto:`

# Jekyll & Ruby setup
To edit the content, changing files on GitHub should suffice.  For developing the layout, running `jekyll` locally might be useful and you should follow the following steps.

Using [rbenv](https://github.com/rbenv/rbenv) and [ruby-build](https://github.com/rbenv/ruby-build) to setup an independent ruby environment compatible with (GitHub Pages](https://pages.github.com/versions/).

    rbenv install 2.7.3
    rbenv local 2.7.3
    gem install jekyll bundler

    bundle
    bundle exec jekyll serve

Then running the server again simply requires

    bundle exec jekyll serve
