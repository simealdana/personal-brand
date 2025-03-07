import { BlogPost } from "../types";

export const effective_prompts_for_website_style_replication: BlogPost = {
  slug: "effective-prompts-for-website-style-replication",
  title: "GUIDE TO CRAFTING EFFECTIVE PROMPTS FOR WEBSITE STYLE REPLICATION",
  category: "Prompt Engineering",
  categories: ["prompt-engineering", "web-development"],
  date: "March 6, 2024",
  author: "Simeon Aldana",
  authorImage: "/images/logo.png",
  readTime: "5 min read",
  image: "/images/blog/posts/prompt-engineering.webp",
  excerpt:
    "Learn how to structure prompts for Large Language Models to accurately replicate website styles using a systematic approach with bracket tags.",
  content: `
      <p class="mb-6">This guide outlines how to structure prompts for Large Language Models (LLMs) like Cursor AI, Claude, or V0, aiming to replicate or emulate the visual styles of websites. The proposed structure employs bracket tags to facilitate clear segmentation and comprehension.</p>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">Initial Prompt</h2>
      
      <p class="mb-6">Use the following structure when requesting the replication of a website's styles:</p>
      
      <pre class="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8"><code>&lt;context&gt;
Provide brief context about the project or the need for the prompt.
Example:
"I need to replicate the exact visual styles of website X for a quick prototype."
&lt;/context&gt;

&lt;task&gt;
Clearly describe what the model should do:
- "Precisely copy the visual style (colors, typography, layout, etc.)."
- "Create a simplified version while retaining essential visual elements."
&lt;/task&gt;

&lt;details&gt;
Specify additional relevant details, such as:
- "Functionalities are not needed, only visual styles."
- "Styles should be responsive for mobile devices."
&lt;/details&gt;

&lt;examples&gt; (optional)
Optionally, provide links or screenshots:
- "Exact style reference: www.example.com"
- "Additional images from the original site"
&lt;/examples&gt;

&lt;technologies&gt; (optional)
Indicate specific technologies you wish to use:
- "React with Tailwind CSS"
- "Pure HTML and CSS, without frameworks"
- "Styles in individual components without inline-styles"
&lt;/technologies&gt;

&lt;rules&gt; (optional)
Set guidelines or specific restrictions:
- "Do not use inline styles."
- "Follow BEM methodology for class naming."
- "Must be compatible with mobile devices (responsive)."
- "Do not include JavaScript."
&lt;/rules&gt;

&lt;avoid&gt; (optional)
Specify elements or practices to avoid:
- "Avoid using excessive animations that may affect user experience."
- "Do not include low-resolution images."
&lt;/avoid&gt;</code></pre>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">Feedback Prompt</h2>
      
      <p class="mb-6">Use this structure when requesting corrections or improvements to the initially generated result:</p>
      
      <pre class="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8"><code>&lt;feedback&gt;
Clearly list the necessary improvements:
- "The typography does not match exactly; use the exact font from the original site."
- "The background color is incorrect; use the exact hex values."
- "The layout is not responsive on mobile devices; please fix it."
&lt;/feedback&gt;

&lt;priority&gt; (optional)
Specify the order of importance for corrections:
- "Correct mobile styles first."
- "Prioritize accuracy in colors and typography over animations."
&lt;/priority&gt;</code></pre>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">Feature Prompt</h2>
      
      <p class="mb-6">Use this structure when you need to add new features or functionalities to the result:</p>
      
      <pre class="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8"><code>&lt;feature&gt;
Clearly describe the new feature to implement:
- "Add an animated dropdown menu."
- "Include hover effects on buttons."
- "Integrate a testimonials section not present in the original site."
&lt;/feature&gt;

&lt;examples&gt; (optional)
Provide concrete examples of the expected result:
- "Example of animated menu: www.example.com/menu"
- "Screenshot of the expected button hover effect"
&lt;/examples&gt;

&lt;reason&gt; (optional)
Explain the reason for adding the new feature:
- "Specific client request to improve user experience."
- "Necessary to align the design with current UI practices."
&lt;/reason&gt;

&lt;avoid&gt; (optional)
Clearly state what should not be done:
- "Do not use overly complex animations that affect performance."
- "Avoid excessive use of JavaScript for simple effects."
&lt;/avoid&gt;</code></pre>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">Example of a Complete Prompt</h2>
      
      <p class="mb-6">Here's an example of how to use these structures together for a real-world request:</p>
      
      <pre class="bg-gray-100 p-4 rounded-md overflow-auto text-sm mb-8"><code>&lt;context&gt;
I need to replicate the visual style of Linktree for a personal portfolio page.
&lt;/context&gt;

&lt;task&gt;
Create a simplified version of Linktree's interface that maintains the clean, 
minimalist aesthetic while adapting it for a tech portfolio.
&lt;/task&gt;

&lt;details&gt;
- The page should include a list of links to my projects and social media.
- Each link should be a button with hover effects.
- Include a profile picture at the top.
- The layout should be mobile-first and responsive.
&lt;/details&gt;

&lt;examples&gt;
- Reference site: https://linktr.ee/
- I want a similar gradient background effect.
&lt;/examples&gt;

&lt;technologies&gt;
- Next.js
- Tailwind CSS
- Static site generation (SSG)
&lt;/technologies&gt;

&lt;rules&gt;
- Follow BEM methodology for class naming.
- Must be responsive for all devices.
- Use smooth animations for hover states.
&lt;/rules&gt;

&lt;avoid&gt;
- No excessive animations that could distract from the content.
- Don't use inline styles.
&lt;/avoid&gt;</code></pre>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">Benefits of Structured Prompts</h2>
      
      <p class="mb-6">Following this structured approach offers several advantages:</p>
      
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Clarity:</strong> The model clearly understands what you're asking for</li>
        <li><strong>Precision:</strong> You get more accurate results that match your requirements</li>
        <li><strong>Efficiency:</strong> Reduces back-and-forth iterations to get the desired output</li>
        <li><strong>Consistency:</strong> Establishes a standard format for your team to follow</li>
      </ul>
      
      <p class="mb-6">By using these structured prompts, you'll maximize the precision and usefulness of the responses generated by LLMs when trying to replicate website styles.</p>
  `,
  relatedPosts: [
    {
      slug: "crafting-effective-llm-prompts",
      title: "Crafting Effective LLM Prompts",
      category: "Prompt Engineering",
    },
  ],
};
