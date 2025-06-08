import { NavButtons } from "../../tools/navbuttons";
import { CodeElement } from "../../tools/codeelement";

export const CSS3 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="font-light text-neutral-500">Chapter 3:</span> Text and
        Fonts:
      </h1>
      <div className="flex flex-col gap-7">
        {/* TEXT COLOR */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.1: </span>
          Text Color:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The <code className="bg-neutral-800 px-2 py-1 rounded">color</code>{" "}
          property changes the color of text. You can use color names, hex
          codes, or RGB values:
        </p>
        <CodeElement
          codeString={`/* Color names */
h1 {
  color: red;
}

/* Hex codes */
p {
  color: #3498db;
}

/* RGB values */
.subtitle {
  color: rgb(255, 99, 71);
}`}
        />

        {/* FONT FAMILY */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.2: </span>
          Font Family:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          The{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">font-family</code>{" "}
          property changes the typeface. Always provide backup fonts in case the
          first one isn't available:
        </p>
        <CodeElement
          codeString={`/* Serif fonts (with little decorative lines) */
h1 {
  font-family: "Times New Roman", serif;
}

/* Sans-serif fonts (clean, no decorative lines) */
p {
  font-family: Arial, Helvetica, sans-serif;
}

/* Monospace fonts (each character same width) */
code {
  font-family: "Courier New", monospace;
}`}
        />

        {/* FONT SIZE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.3: </span>
          Font Size:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Control text size with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">font-size</code>.
          You can use pixels (px), em, rem, or percentages:
        </p>
        <CodeElement
          codeString={`/* Pixels - fixed size */
h1 {
  font-size: 32px;
}

/* Em - relative to parent element */
p {
  font-size: 1.2em;
}

/* Rem - relative to root element */
.subtitle {
  font-size: 1.5rem;
}

/* Percentage */
small {
  font-size: 80%;
}`}
        />

        {/* FONT WEIGHT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.4: </span>
          Font Weight:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Make text <strong>bold</strong> or light with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">font-weight</code>:
        </p>
        <CodeElement
          codeString={`/* Keyword values */
.bold-text {
  font-weight: bold;
}

.light-text {
  font-weight: lighter;
}

.normal-text {
  font-weight: normal;
}

/* Numeric values (100-900) */
.thin {
  font-weight: 100;
}

.extra-bold {
  font-weight: 800;
}`}
        />

        {/* TEXT DECORATION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.5: </span>
          Text Decoration:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Add lines to your text with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">
            text-decoration
          </code>
          :
        </p>
        <CodeElement
          codeString={`/* Underline text */
.underlined {
  text-decoration: underline;
}

/* Strike through text */
.crossed-out {
  text-decoration: line-through;
}

/* Remove underlines (useful for links) */
a {
  text-decoration: none;
}

/* Overline */
.overlined {
  text-decoration: overline;
}`}
        />

        {/* TEXT ALIGNMENT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.6: </span>
          Text Alignment:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Control how text is positioned with{" "}
          <code className="bg-neutral-800 px-2 py-1 rounded">text-align</code>:
        </p>
        <CodeElement
          codeString={`/* Center text */
h1 {
  text-align: center;
}

/* Right align */
.right-text {
  text-align: right;
}

/* Left align (default) */
p {
  text-align: left;
}

/* Justify (spread out evenly) */
.justified {
  text-align: justify;
}`}
        />

        {/* COMMON FONT COMBINATIONS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.7: </span>
          Popular Font Combinations:
        </h3>
        <table>
          <thead>
            <tr>
              <th className="border border-neutral-600 border-dashed w-[40%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Font Stack
              </th>
              <th className="border border-neutral-600 border-dashed w-[60%] text-xl font-medium text-foreground text-neutral-100 p-2">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  Arial, sans-serif
                </code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Clean, modern, highly readable
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  "Times New Roman", serif
                </code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Traditional, formal, newspaper-like
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  "Courier New", monospace
                </code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Code-like, each character same width
              </td>
            </tr>
            <tr>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                <code className="bg-neutral-800 px-2 py-1 rounded text-sm">
                  Georgia, serif
                </code>
              </td>
              <td className="border border-neutral-600 border-dashed text-lg font-light text-foreground text-neutral-100 p-2">
                Elegant, easy to read on screens
              </td>
            </tr>
          </tbody>
        </table>

        {/* TRY IT OUT */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">3.8: </span>
          Try It Yourself:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          In the editor, experiment with different font properties. Try making
          the heading larger, changing the font family, or adding some color to
          the paragraphs. See how different combinations affect the look and
          feel of your text.
        </p>
        <CodeElement
          codeString={`/* Example to try */
h1 {
  font-family: Georgia, serif;
  font-size: 36px;
  color: #2c3e50;
  text-align: center;
}

p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #34495e;
  line-height: 1.6;
}`}
        />

        <NavButtons previous="/lessons/css/2" next="/lessons/css/4" />
      </div>
    </>
  );
};
