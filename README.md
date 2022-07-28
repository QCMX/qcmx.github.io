This webpage is hosted via GitHub pages.

To do:

  * Timeline responsive
  * Accent color
  * GDPR, legal notice
  * Page descriptions for SEO

# Editing
For explanations on how to configure the page see the [documentation for Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/docs/configuration/), the used theme.

Don't skip over putting descriptions and captions for disabled people and credit attributes for pictures.

## Email obfuscation
Email obfuscation helps fight spam.  To this end the `href` attribute is encoded using ROT-13.  After DOM load the `href` attribute of all elements with the `decode-href` class are automatically decoded.

The e-mail is written in encoded form in the source code.  To encode an e-mail link open the developer console and type `rot('name@example.com')`.

Then the `decode-href` class has to be added to the HTML. The `author_profile` and `teamgrid` includes support the `decode: true` setting to achieve this. `author_profile` should include `mailto:`

# Setup
To edit the content, changing files on GitHub should suffice.  For developing the layout, running `jekyll` locally might be useful and you should follow the following steps.

Using [rbenv](https://github.com/rbenv/rbenv) and [ruby-build](https://github.com/rbenv/ruby-build) to setup an independent ruby environment compatible with (GitHub Pages](https://pages.github.com/versions/).

    rbenv install 2.7.3
    rbenv local 2.7.3
    gem install jekyll bundler

    bundle
    bundle exec jekyll serve
