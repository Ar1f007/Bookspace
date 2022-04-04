export const Blog = () => {
  return (
    <div className="max-w-4xl py-10 mx-auto">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          What is context Api? What is the purpose of it?
        </div>
        <div class="collapse-content">
          <p>
            <b>What is it:</b> According to React documentation, "Context provides a way to pass
            data through the component tree without having to pass props down manually at every
            level."
            <br /> <br />
            <b>Purpose: </b> In react, we know that data is passed top-down via props. In order to
            share data among components we would typically do props drilling which is very
            burdensome process. Context api let's us avoid that, and allows us to share information
            to any component, by keeping information in a central location and granting access to
            any component that asks it. <br />
            It is mainly used when some data needs to be accessible by many components at different
            nesting levels.
          </p>
        </div>
      </div>

      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">What is Semantic tag?</div>
        <div class="collapse-content">
          <p>
            The term "Semantic" refers to the meaning of a piece of code. In HTML, a semantic tag is
            used to describe what the content inside is about. For example, <em>&lt;nav&gt;</em> tag
            refers to the navigation, <em>&lt;footer&gt;</em> refers to the footer of the body etc.
            whereas a non semantic element such as <em>&lt;div&gt;</em> does not transfer any
            meaning. But a semantic tag can clearly describes it meaning to the browser and the
            developer.
          </p>
        </div>
      </div>

      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-xl font-medium">
          State the difference between inline, block and inline-block elements.
        </div>
        <div class="collapse-content">
          <p>
            <b>
              <em>inline:</em>
            </b>{' '}
            as the name says, it lets other elements sit on its left-right inline. We can not set
            width and height to an inline element. Also can not set top & bottom margin-padding to
            it.
            <br />
            <br />
            <b>
              <em>block:</em>
            </b>{' '}
            block elements takes up the entire width (if width is not defined), forces a line break.
            We can set width-height, margin-padding to it. <br />
            <br />
            <b>
              <em>inline-block:</em>
            </b>{' '}
            it is the mixture of both (block and inline) i.e we can set other element to its left
            and right side as well as we can also give margin-padding top-right-bottom-left to it.
          </p>
        </div>
      </div>
    </div>
  );
};
