import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";

export const CSS4 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 4:</span> Colors
        and Backgrounds:
      </h1>
      <div className="flex flex-col gap-7">
        {/* COLOR FORMATS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.1: </span>
          Understanding Color Formats:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          CSS supports several ways to define colors. Each has its own
          advantages:
        </p>

        <h4 className="text-xl font-medium text-neutral-200">
          Color Names (140 predefined names):
        </h4>
        <CodeElement
          codeString={`/* Easy to remember */
h1 {
  color: red;
  background-color: lightblue;
}

/* Some popular color names */
.header { color: navy; }
.warning { color: orange; }
.success { color: green; }
.error { color: crimson; }`}
        />

        <h4 className="text-xl font-medium text-neutral-200">
          Hex Colors (most common for web):
        </h4>
        <CodeElement
          codeString={`/* Format: #RRGGBB */
.primary { color: #3498db; }     /* Nice blue */
.secondary { color: #2ecc71; }   /* Green */
.accent { color: #e74c3c; }      /* Red */

/* Short form (when pairs are same) */
.white { color: #fff; }          /* Same as #ffffff */
.black { color: #000; }          /* Same as #000000 */`}
        />

        <h4 className="text-xl font-medium text-neutral-200">
          RGB and RGBA (with transparency):
        </h4>
        <CodeElement
          codeString={`/* RGB: Red, Green, Blue (0-255) */
.blue { color: rgb(52, 152, 219); }

/* RGBA: includes Alpha (transparency 0-1) */
.transparent-blue { 
  background-color: rgba(52, 152, 219, 0.5); 
}

/* Useful for overlays */
.overlay {
  background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
}`}
        />

        {/* BACKGROUND COLORS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.2: </span>
          Background Colors:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Use{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">
            background-color
          </code>{" "}
          to add color behind elements:
        </p>
        <CodeElement
          codeString={`/* Solid background colors */
body {
  background-color: #f8f9fa;
}

.highlight-box {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
}

.dark-section {
  background-color: #2c3e50;
  color: white;
}`}
        />

        {/* BACKGROUND IMAGES */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.3: </span>
          Background Images:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Add images as backgrounds with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">
            background-image
          </code>
          :
        </p>
        <CodeElement
          codeString={`/* Basic background image */
.hero-section {
  background-image: url('hero-background.jpg');
  height: 400px;
}

/* Control how image repeats */
.pattern {
  background-image: url('pattern.png');
  background-repeat: repeat;     /* Default */
  background-repeat: no-repeat;  /* Don't repeat */
  background-repeat: repeat-x;   /* Repeat horizontally only */
  background-repeat: repeat-y;   /* Repeat vertically only */
}`}
        />

        {/* BACKGROUND SIZE AND POSITION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.4: </span>
          Background Size and Position:
        </h3>
        <CodeElement
          codeString={`/* Background size */
.cover-image {
  background-image: url('large-photo.jpg');
  background-size: cover;        /* Cover entire area */
  background-size: contain;      /* Fit entire image */
  background-size: 100% 200px;   /* Specific width/height */
}

/* Background position */
.positioned-bg {
  background-image: url('logo.png');
  background-position: center;   /* Center the image */
  background-position: top right; /* Top right corner */
  background-position: 50% 25%;  /* Custom percentage */
}`}
        />

        {/* GRADIENTS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.5: </span>
          CSS Gradients:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Create smooth color transitions with gradients:
        </p>
        <CodeElement
          codeString={`/* Linear gradients */
.gradient-1 {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}

.gradient-2 {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.gradient-3 {
  background: linear-gradient(to bottom, 
    #ff6b6b 0%, 
    #4ecdc4 50%, 
    #45b7d1 100%
  );
}

/* Radial gradients */
.radial-gradient {
  background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}`}
        />

        {/* COLOR COMBINATIONS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.6: </span>
          Popular Color Schemes:
        </h3>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[30%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Scheme
              </th>
              <th className="border border-neutral-600 border-dashed w-[70%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Colors
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Ocean Blue
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  #3498db, #2980b9, #f8f9fa
                </code>
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Fresh Green
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  #2ecc71, #27ae60, #ecf0f1
                </code>
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Warm Sunset
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  #e74c3c, #f39c12, #fff
                </code>
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Professional
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  #2c3e50, #34495e, #ecf0f1
                </code>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ACCESSIBILITY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.7: </span>
          Color Accessibility Tips:
        </h3>
        <ul className="max-w-2xl text-xl font-light text-foreground text-neutral-100 space-y-2 list-disc list-inside">
          <li>Ensure good contrast between text and background colors</li>
          <li>Don't rely only on color to convey information</li>
          <li>Test your colors with online contrast checkers</li>
          <li>Consider users with color blindness</li>
        </ul>

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">4.8: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor, experiment with different background colors and text
          colors. Try creating a simple gradient or adding a background color to
          some of your elements. Notice how colors can completely change the
          mood and feel of your webpage.
        </p>
        <CodeElement
          codeString={`/* Try this example */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-family: Arial, sans-serif;
}

.container {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
}`}
        />

        <NavButtons previous="/lessons/css/3" next="/lessons/css/5" />
      </div>
    </>
  );
};
