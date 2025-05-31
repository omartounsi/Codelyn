import { CodeElement } from "../../tools/codeelement";
import { NavButtons } from "../../tools/navbuttons";

export const HTML5 = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-tight tracking-tighter lg:leading-[1.1] text-neutral-100">
        <span className="text-neutral-500 font-light">Chapter 5:</span> Tables
        and Data
      </h1>
      <div className="flex flex-col gap-7">
        {/* INTRODUCTION */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.1: </span>
          Introduction to Tables
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Tables are perfect for displaying data that naturally fits into rows
          and columns. Think of a spreadsheet - that's exactly what HTML tables
          can create on your webpage.
        </p>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Whether you're showing a price list, comparing features, or displaying
          statistics, tables help organize information in a way that's easy to
          read and understand.
        </p>

        {/* BASIC TABLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.2: </span>
          Basic Table Structure:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          HTML tables use specific tags to create the structure. Every table
          starts with the table tag, then uses rows and cells to organize the
          content.
        </p>
        <CodeElement
          codeString={`<table>\n  <tr>\n    <td>Cell 1</td>\n    <td>Cell 2</td>\n  </tr>\n</table>`}
          styling="whitespace-pre"
          paragraphString="The <table>...</table> creates the table container. <tr>...</tr> creates a table row, and <td>...</td> creates a table data cell."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try adding this basic table to the editor and see how it displays.
          Notice how the cells are arranged side by side!
        </p>

        {/* TABLE HEADERS */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.3: </span>
          Table Headers:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Just like paragraphs have headings, tables have headers. Table headers
          tell us what each column or row represents, making the data much
          easier to understand.
        </p>
        <CodeElement
          codeString={`<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>25</td>\n  </tr>\n</table>`}
          styling="whitespace-pre"
          paragraphString="The <th>...</th> tag creates table headers. They're usually bold and centered by default, making them stand out from regular data cells."
        />

        {/* COMPLEX TABLE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          <span className="font-light ">5.4: </span>A Complete Table Example:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Let's put it all together and create a more complete table. This
          example shows a simple grade book with multiple students and subjects.
        </p>
        <CodeElement
          codeString={`<table>\n  <tr>\n    <th>Student</th>\n    <th>Math</th>\n    <th>Science</th>\n    <th>English</th>\n  </tr>\n  <tr>\n    <td>Alice</td>\n    <td>95</td>\n    <td>88</td>\n    <td>92</td>\n  </tr>\n  <tr>\n    <td>Bob</td>\n    <td>87</td>\n    <td>94</td>\n    <td>89</td>\n  </tr>\n  <tr>\n    <td>Carol</td>\n    <td>92</td>\n    <td>91</td>\n    <td>96</td>\n  </tr>\n</table>`}
          styling="whitespace-pre"
          paragraphString="This table has a header row with column titles, followed by three rows of student data. Each row has the same number of cells as the header."
        />
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Copy this table into the editor and try adding your own row of data.
          Remember: each row should have the same number of cells!
        </p>

        {/* PRACTICE */}
        <h3 className="text-2xl leading-tight font-light tracking-tighter lg:leading-[1.1] text-white opacity-60 ">
          Practice Exercise:
        </h3>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Try creating your own tables in the editor! Here are some ideas:
        </p>
        <ul className="max-w-2xl text-lg font-light text-neutral-300 ml-6">
          <li className="mb-2">
            • Create a table comparing different phones with their prices and
            features
          </li>
          <li className="mb-2">
            • Make a weekly schedule showing your daily activities
          </li>
          <li className="mb-2">
            • Build a simple menu with food items and their prices
          </li>
        </ul>
        <p className="max-w-2xl text-xl font-light text-foreground text-neutral-100">
          Experiment with different amounts of rows and columns. The more you
          practice, the more comfortable you'll become with table structure!
        </p>

        <NavButtons previous="/lessons/html/4" next="/lessons/html/6" />
      </div>
    </>
  );
};
