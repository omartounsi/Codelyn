import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";

export const HTML6 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 6:</span> Forms
        and Input:
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.1: </span>
          Introduction to Forms:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Forms are the way websites collect information from users. Every time
          you log in, sign up, search for something, or leave a comment, you're
          using a form.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML forms provide the structure for gathering user input, from simple
          text fields to complex multi-step forms with various input types.
        </p>

        {/* BASIC FORM */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.2: </span>
          Basic Form Structure:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Every form starts with the form tag, which acts as a container for all
          the input elements. Inside the form, you'll use various input types to
          collect different kinds of data.
        </p>
        <CodeElement
          codeString={`<form>\n  <input type="text" placeholder="Enter your name">\n  <button type="submit">Submit</button>\n</form>`}
          styling="whitespace-pre"
          paragraphString="The <form>...</form> creates the form container. <input> creates input fields, and <button> creates a submit button."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try adding this basic form to the editor and see how it creates an
          input field with a submit button!
        </p>

        {/* INPUT TYPES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.3: </span>
          Different Input Types:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML provides many different input types for collecting specific kinds
          of data. Each type has special behavior and validation built in.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<input type="text" placeholder="Your name">`}
            paragraphString="Text input for general text entry."
          />
          <CodeElement
            codeString={`<input type="email" placeholder="your@email.com">`}
            paragraphString="Email input with built-in email validation."
          />
          <CodeElement
            codeString={`<input type="password" placeholder="Password">`}
            paragraphString="Password input that hides the text as you type."
          />
          <CodeElement
            codeString={`<input type="number" min="1" max="100">`}
            paragraphString="Number input with optional min/max values."
          />
        </div>

        {/* LABELS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.4: </span>
          Labels and Accessibility:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Labels are crucial for accessibility and usability. They describe what
          each input field is for and make forms easier to use with screen
          readers.
        </p>
        <CodeElement
          codeString={`<label for="username">Username:</label>\n<input type="text" id="username" name="username">`}
          styling="whitespace-pre"
          paragraphString="The 'for' attribute in the label should match the 'id' of the input. This creates a connection between them."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          When you click on the label, it automatically focuses the associated
          input field. This makes forms much more user-friendly!
        </p>

        {/* SELECT AND RADIO */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.5: </span>
          Dropdowns and Radio Buttons:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Sometimes you want users to choose from a list of options instead of
          typing. HTML provides select dropdowns and radio buttons for this.
        </p>
        <div className="flex flex-col gap-6">
          <CodeElement
            codeString={`<select name="country">\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n  <option value="uk">United Kingdom</option>\n</select>`}
            styling="whitespace-pre"
            paragraphString="Select creates a dropdown menu. Each option represents a choice."
          />
          <CodeElement
            codeString={`<input type="radio" id="small" name="size" value="small">\n<label for="small">Small</label>\n<input type="radio" id="large" name="size" value="large">\n<label for="large">Large</label>`}
            styling="whitespace-pre"
            paragraphString="Radio buttons let users pick one option from a group. They all need the same 'name' attribute."
          />
        </div>

        {/* FORM VALIDATION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">6.6: </span>
          Form Validation:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML5 includes built-in validation to help ensure users enter valid
          data. You can make fields required, set patterns, and more.
        </p>
        <CodeElement
          codeString={`<input type="email" required placeholder="Required email">\n<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">`}
          styling="whitespace-pre"
          paragraphString="The 'required' attribute makes a field mandatory. The 'pattern' attribute enforces a specific format."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try the form in the editor - notice how the browser checks your input
          before allowing submission!
        </p>

        <NavButtons previous="/lessons/html/5" next="/lessons/html/7" />
      </div>
    </>
  );
};
