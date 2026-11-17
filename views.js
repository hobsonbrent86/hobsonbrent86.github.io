(function () {
  var views = {
    funnel: [
      {
        id: "tof",
        label: "Top of funnel",
        span: "100%",
        kicker: "Top of funnel",
        title: "Brand",
        lead: "Work that makes a company visible before someone is ready to buy.",
        examples: [
          ["Atlassian", "Impossible Alone films, the F1 sponsorship, and television, planned with the digital work."],
          ["Workday", "Business Caddie, the global spot with Phil Mickelson, across television, digital, print, and outdoor."],
          ["Unitek", "A multi-million-dollar mix of TV, radio, outdoor, and print, run beside paid search."],
          ["BIOBIZZ", "Opened the North American brand. Primary research on US partners, then the market plan."],
          ["Wytebox", "Site, blog, and category pages built from how competitors actually structure their story."]
        ]
      },
      {
        id: "mof",
        label: "Middle of funnel",
        span: "86%",
        kicker: "Middle of funnel",
        title: "Consideration",
        lead: "People who know the name and have not asked to talk.",
        examples: [
          ["Atlassian", "Lifecycle and ABM across Jira and the rest of the portfolio. Email, SMS, push, web, and paid. Portfolio media on the order of $100M a year."],
          ["Workday", "Lead generation and personalization for an enterprise platform. Audience, rule, and page kept in line."],
          ["CollabNet", "Marketo nurture against Salesforce, so the email and the CRM described the same buyer."],
          ["Unitek", "Email and direct mail for people who had inquired and had not applied."],
          ["Wytebox", "Email, LinkedIn, and phone sequences for CEO, ICP, Florida, nursing, workforce, and transportation cohorts."]
        ]
      },
      {
        id: "bof",
        label: "Bottom of funnel",
        span: "72%",
        kicker: "Bottom of funnel",
        title: "Pipeline",
        lead: "Turning a program into a lead sales will take, with a number finance can check.",
        examples: [
          ["Workday", "Cost shown beside pipeline. The path from first response to a lead sales could work."],
          ["CollabNet", "A lead passed to sales when the lifecycle said it was ready, with context. SEO and SEM on a $1M+ budget."],
          ["Atlassian", "Sat with product and engineering so the market story matched what sales was about to show. Spend moved when pipeline contribution was weak."],
          ["Unitek", "PPC and admissions on enrollment. Budget moved when a channel or a market missed."],
          ["Wytebox", "Enterprise sales, pilots, and partner conversations, with pipeline reporting and no separate ops team behind it."]
        ],
        breakAfter: true
      },
      {
        id: "post",
        label: "Post-conversion",
        span: "64%",
        kicker: "Post-conversion",
        title: "The first months",
        lead: "The handoff, the intake, and whether the new account actually starts.",
        examples: [
          ["Wytebox", "Activation and repeat usage watched weekly. Onboarding across Workspace, Jamf, Intune, and the other apps. The product ships through MDM."],
          ["Workday", "Manual campaign and routing work replaced with systems. Operational efficiency up 40%."],
          ["Unitek", "Intake rebuilt when lead volume outran the team. Handoffs with admissions renegotiated."],
          ["Atlassian", "Brand spend, nurture, and the sales handoff were planned together, including bottom-up adoption."],
          ["CollabNet", "The page, the email, and the ad used the same offer through the handoff."]
        ]
      },
      {
        id: "retain",
        label: "Retention",
        span: "64%",
        kicker: "Retention",
        title: "Keeping the account",
        lead: "Usage, renewal risk, and the decision to stop a program that is not holding.",
        examples: [
          ["Atlassian", "Retention, attribution, and incrementality on lifecycle programs, measured past the first click."],
          ["Wytebox", "Churn flagged from declining usage before the renewal talk. Retention tests given a kill date before they launched."],
          ["Workday", "Sales programs covered expansion and new logos."],
          ["BIOBIZZ", "First-year revenue came with distributor relationships that could grow."],
          ["Wytebox", "A weekly health digest of usage."]
        ]
      },
      {
        id: "csm",
        label: "CSM",
        span: "64%",
        kicker: "Customer success",
        title: "After the sale, with the account team",
        lead: "Sat with the people who own the account and gave them a readout for the review.",
        examples: [
          ["Atlassian", "Gainsight and LaunchDarkly were used with analytics partners on journeys, flagged experiences, and campaign learnings."],
          ["Atlassian", "QBR-style reviews with field, portfolio marketing, and customer success on launches and on which advocates could be asked again."],
          ["Workday", "Sat with customer success and sales on which segments and messages were actually landing."],
          ["Wytebox", "Health posted to the CS channel. Advisor reviews cover usage, pipeline, and what to change next."],
          ["Wytebox", "Renewal risk came from product usage."]
        ]
      }
    ],
    car: [
      {
        id: "steer",
        kicker: "Steering wheel",
        title: "Running it",
        lead: "Owns the plan, the people, and the result.",
        examples: [
          ["Wytebox", "Founder and CEO. Owns positioning, the roadmap, and the P&L. Also fundraising, enterprise sales, and the weekly operating review."],
          ["BIOBIZZ", "General manager. Started the North American subsidiary and led the team that grew revenue in the first year."],
          ["Benefits for Fallen Heroes", "COO and board member. Original incorporator. Wrote the bylaws, filed the entity, and ran day-to-day operations."],
          ["Unitek", "Marketing director for 25+ people. That covered internal staff, offshore development and infrastructure, and an agency."],
          ["Atlassian", "Senior media leader. Portfolio scope on the order of $100M a year, with a team running Agile, Kanban, and SAFe."]
        ]
      },
      {
        id: "engine",
        kicker: "Engine",
        title: "The technical work",
        lead: "Architecture, data, and the systems that make a campaign or a product repeatable.",
        examples: [
          ["Wytebox", "Architected the product. Retrieval, persistent data, and a fleet of agents. Python, APIs, and MCP. Usable from a command line and in plain language."],
          ["Wytebox", "68 agents across inbound, outbound, lifecycle, operations, and brand. They run the day-to-day."],
          ["Workday", "ETL with Airbyte, dbt, and Spark. Tableau and Looker for the numbers leadership used. APIs across CRM, CDP, and marketing automation."],
          ["Distribution", "Jamf, Intune, Automox, and NinjaOne. Supabase under the product. A VPS for the agent that stays on."],
          ["CollabNet", "WordPress design and development, beside Salesforce and Marketo admin."]
        ]
      },
      {
        id: "drivetrain",
        kicker: "Drivetrain",
        title: "Between the teams",
        lead: "The work between product, sales, finance, admissions, and agencies.",
        examples: [
          ["Atlassian", "Product, engineering, content, design, sales, and agencies shared a launch calendar, a brief, and a readout after."],
          ["Workday", "Finance and sales on forecast-friendly numbers, budget pacing, and long-cycle journeys."],
          ["Unitek", "Admissions and marketing measured the work by enrollment."],
          ["CollabNet", "Worked with sales on which leads they would accept, and on pipeline."],
          ["Wytebox", "Product, sales, and marketing in the same week. The message, the sequence, and the product have to match."]
        ]
      },
      {
        id: "wheel",
        kicker: "Wheel",
        title: "The base",
        lead: "Starting the company, the system under it, and checking the work against the numbers.",
        examples: [
          ["Wytebox", "Took it from an idea to a production system."],
          ["BIOBIZZ", "A subsidiary that did not exist. Research first, then a market plan, then revenue in year one."],
          ["Benefits for Fallen Heroes", "Wrote the bylaws, filed the entity, built a three-year forecast, and ran the daily operation."],
          ["Workday and CollabNet", "The CRM, the automation, and the analytics had to describe the same account."],
          ["The habit", "Stay close to the work. That includes PPC, the website, the pipeline, and the code. Tests get a kill date. Reports are written for a leadership team."]
        ]
      }
    ],
    stack: [
      {
        id: "ai", band: "AI", span: "76%", chip: "AI",
        kicker: "AI",
        title: "Models, agents, and retrieval",
        lead: "Wytebox uses models in two places. Workers turn captured work into summaries and a graph. A separate fleet of agents runs revenue and operations on that context.",
        examples: [
          ["Wytebox", "Fireworks is the default model for enrichment. OpenAI and Together are alternates when a job needs a different model. Customer content is not used to train those models."],
          ["Wytebox", "68 agents across inbound, outbound, lifecycle, operations, and brand. They read company context through MCP."],
          ["Workbench", "Claude, Cursor, and Copilot are how the product and the agents get built. The same MCP context is available in the editor."],
          ["RAG", "The model does not answer from a blank prompt. It retrieves from the company's own record first."]
        ]
      },
      {
        id: "agents", band: "AI", span: "76%", chip: "Agents",
        kicker: "AI",
        title: "Agents",
        lead: "These are production agents inside Wytebox. Each one has a job, a source of context, and a place the result goes.",
        examples: [
          ["Wytebox", "68 agents in five areas. Inbound, outbound, lifecycle, operations, and brand."],
          ["Product", "They call MCP for company context. They do not need a connector for each work tool."]
        ]
      },
      {
        id: "mcp", band: "AI", span: "76%", chip: "MCP",
        kicker: "AI",
        title: "MCP",
        lead: "MCP is how other tools ask Wytebox what is happening. The product exposes company context through it, from a command line or in plain language.",
        examples: [
          ["Wytebox", "The web product and the agents both read the same context through MCP."],
          ["Workbench", "HubSpot, Apollo, Google, and Microsoft are connected the same way inside Cursor, so an agent can see the account it is writing about."]
        ]
      },
      {
        id: "claude", band: "AI", span: "76%", chip: "Claude",
        kicker: "AI",
        title: "Claude",
        lead: "Claude is a daily model for writing, review, and agent work in the editor, next to the repo and the company context.",
        examples: [
          ["Workbench", "Used in Cursor on the Wytebox codebase and on go-to-market drafts."],
          ["Wytebox", "One of the models in regular use. Production enrichment defaults to Fireworks, with other models when the job calls for them."]
        ]
      },
      {
        id: "cursor", band: "AI", span: "76%", chip: "Cursor",
        kicker: "AI",
        title: "Cursor",
        lead: "Cursor is where the Wytebox code and the agent tooling are written. Architecture, agents, and fixes ship from the same editor.",
        examples: [
          ["Wytebox", "Hands-on in the repo."],
          ["GTM", "HubSpot and the outbound tools are connected in the editor, so an agent can see the account before it drafts."]
        ]
      },
      {
        id: "copilot", band: "AI", span: "76%", chip: "Copilot",
        kicker: "AI",
        title: "Copilot",
        lead: "Copilot sits in the same development workbench as Claude and Cursor. It is another model on the code while Wytebox is being built.",
        examples: [
          ["Development", "Used for implementation in the editor. The product's own agents are a separate system from this."]
        ]
      },
      {
        id: "fireworks", band: "AI", span: "76%", chip: "Fireworks",
        kicker: "AI",
        title: "Fireworks",
        lead: "Fireworks is the default model API for Wytebox enrichment. Workers send the context a step needs. The model returns summaries, work sessions, and project groupings.",
        examples: [
          ["Wytebox", "Those three enrichment steps run on a contracted Fireworks account."],
          ["Boundary", "The worker does not send the desktop ciphertext. Customer content stays out of provider training."]
        ]
      },
      {
        id: "openai", band: "AI", span: "76%", chip: "OpenAI",
        kicker: "AI",
        title: "OpenAI",
        lead: "OpenAI is an alternate model API in Wytebox, wired next to Fireworks and Together. It is used when that model fits the job and the account has it turned on.",
        examples: [
          ["Wytebox", "Same class of work as Fireworks. Enrichment prompts and outputs run under a contract."]
        ]
      },
      {
        id: "together", band: "AI", span: "76%", chip: "Together",
        kicker: "AI",
        title: "Together",
        lead: "Together is the other alternate model API. It does the same enrichment job as OpenAI when we want a different model and the contract covers the data.",
        examples: [
          ["Wytebox", "Available beside Fireworks. Used when that model is the right one for the job."]
        ]
      },
      {
        id: "prompts", band: "AI", span: "76%", chip: "Prompts",
        kicker: "AI",
        title: "Prompt systems",
        lead: "Prompts are part of the Wytebox product. Each enrichment step has its own prompt, sees only the context that step needs, and can be checked before a customer sees a bad answer.",
        examples: [
          ["Wytebox", "Separate prompts for chunk summaries, work sessions, and project groupings."],
          ["Evaluation", "A failed answer is caught in the pipeline. It is not left for the customer to find."]
        ]
      },
      {
        id: "retrieval", band: "Retrieval", span: "84%", chip: "Retrieval",
        kicker: "Retrieval",
        title: "Retrieval",
        lead: "Before a model answers, Wytebox retrieves from the company record. That record is SQL, a graph in Neo4j, and vectors.",
        examples: [
          ["Neo4j", "Derived work is projected into Neo4j Aura. Cypher answers the questions that are awkward in SQL."],
          ["Vectors", "pgvector on Postgres, plus other vector stores. Embeddings recall a short list. A tighter query finishes the job."],
          ["RAG", "Chunks, summaries, and the graph are what the model reads. The same pattern is used in the product and in the internal agents."],
          ["SQL", "Postgres stays the system of record. The graph and the vectors point back at those rows."]
        ]
      },
      {
        id: "rag", band: "Retrieval", span: "84%", chip: "RAG",
        kicker: "Retrieval",
        title: "RAG",
        lead: "RAG is how answers are built from company data. The record is chunked, retrieved, and then handed to a model. The answer has a source.",
        examples: [
          ["Wytebox", "Activity becomes chunks, summaries, and a graph. The model reads that context. It does not invent from a blank prompt."],
          ["GCP", "Vertex did the embeddings and the answers. A NoSQL store held the records. Vector search recalled them. Cloud Storage held the files."]
        ]
      },
      {
        id: "neo4j", band: "Retrieval", span: "84%", chip: "Neo4j",
        kicker: "Retrieval",
        title: "Neo4j",
        lead: "Neo4j holds the Wytebox work graph. Graph sync writes derived nodes and edges. Analytical and natural-language queries read them in Cypher.",
        examples: [
          ["Wytebox", "Aura is the production graph. It holds the derived work. The raw record stays in Postgres."],
          ["Boundary", "The raw record stays in Postgres. The graph is what you query when the question is about how work connects."]
        ]
      },
      {
        id: "vectors", band: "Retrieval", span: "84%", chip: "Vector databases",
        kicker: "Retrieval",
        title: "Vector databases",
        lead: "Retrieval uses more than one vector store. The text is embedded, the nearest records are recalled, and a short context is handed to the model.",
        examples: [
          ["Wytebox", "pgvector on Postgres for entity search. Other vector stores when the data needed its own index."],
          ["GCP", "Vector search sat between Vertex and the NoSQL store, so the model retrieved from our data."]
        ]
      },
      {
        id: "pgvector", band: "Retrieval", span: "84%", chip: "pgvector",
        kicker: "Retrieval",
        title: "pgvector",
        lead: "pgvector keeps embeddings in Postgres, next to the rows they describe. Search can start with meaning and finish with a SQL filter and row-level security.",
        examples: [
          ["Wytebox", "Used for entity search on the account record. The vector finds candidates. SQL applies account scope and the rest of the filter."]
        ]
      },
      {
        id: "embeddings", band: "Retrieval", span: "84%", chip: "Embeddings",
        kicker: "Retrieval",
        title: "Embeddings",
        lead: "Embeddings are the index for RAG. A chunk, a summary, or an entity is stored as a vector so retrieval can find it without scanning the whole corpus.",
        examples: [
          ["Wytebox", "Produced in the enrichment path and stored for recall, in pgvector and in other vector stores."],
          ["GCP", "Vertex produced the embeddings. Recall used them against the NoSQL records and the files in Cloud Storage."]
        ]
      },
      {
        id: "sql", band: "Retrieval", span: "84%", chip: "SQL",
        kicker: "Retrieval",
        title: "SQL",
        lead: "SQL is the precise layer under retrieval. Vectors and the graph find related records. SQL is where account scope, rows, and the final number live.",
        examples: [
          ["Wytebox", "Row-level security and account scope are in Postgres. Neo4j and the vectors point back here."],
          ["Workday", "Campaign reporting had to match the warehouse and the CRM. If they disagreed, the number was not ready to use."]
        ]
      },
      {
        id: "app", band: "Application", span: "90%", chip: "Application",
        kicker: "Application",
        title: "Application",
        lead: "This is the software a person opens. The Wytebox web app and workers, and earlier, the marketing sites that had to be shipped.",
        examples: [
          ["Wytebox", "Next.js and React for the product. TypeScript on the APIs. Python in the workers that ingest and enrich."],
          ["Wytebox", "Usable from a command line and in plain language, through MCP, without a connector project for each work tool."],
          ["CollabNet", "WordPress maintenance, design, and development. The site was part of the marketing job."]
        ]
      },
      {
        id: "python", band: "Application", span: "90%", chip: "Python",
        kicker: "Application",
        title: "Python",
        lead: "Python is the language of the Wytebox workers and much of the agent tooling. Ingest, decryption, chunking, enrichment, and graph sync are Python jobs that stay up.",
        examples: [
          ["Wytebox", "The production system shipped in Python, alongside the TypeScript web app."]
        ]
      },
      {
        id: "typescript", band: "Application", span: "90%", chip: "TypeScript",
        kicker: "Application",
        title: "TypeScript",
        lead: "TypeScript is the Wytebox web app and the short-lived APIs. Auth, admin, analytics, and the request path are written there.",
        examples: [
          ["Wytebox", "Next.js on Vercel. The long-running enrichment workers are Python, not this layer."]
        ]
      },
      {
        id: "react", band: "Application", span: "90%", chip: "React",
        kicker: "Application",
        title: "React",
        lead: "React is the Wytebox interface. Account admin, analytics, and the screens a buyer uses are built in it.",
        examples: [
          ["Wytebox", "The web application reads the same account-scoped data the agents and MCP use."]
        ]
      },
      {
        id: "node", band: "Application", span: "90%", chip: "Node",
        kicker: "Application",
        title: "Node",
        lead: "Node runs services and scripts around the Wytebox web app, beside the Python workers.",
        examples: [
          ["Wytebox", "Used where a tool or a service needed Node. It does not replace the enrichment pipeline."]
        ]
      },
      {
        id: "wordpress", band: "Application", span: "90%", chip: "WordPress",
        kicker: "Application",
        title: "WordPress",
        lead: "At CollabNet, WordPress was the marketing site. Maintenance, design, and development sat with the marketing job.",
        examples: [
          ["CollabNet", "The site was updated and shipped in-house."]
        ]
      },
      {
        id: "rest", band: "Application", span: "90%", chip: "REST",
        kicker: "Application",
        title: "APIs",
        lead: "REST APIs connect the desktop agent, the workers, the web app, and MCP. Calls are authenticated, and the expensive ones are rate limited.",
        examples: [
          ["Wytebox", "Desktop ingest, product APIs, and MCP sit on that contract. The desktop encrypts activity before it publishes."]
        ]
      },
      {
        id: "data", band: "Data", span: "95%", chip: "Data",
        kicker: "Data",
        title: "Data",
        lead: "This is the path from a raw event to a number someone will use. Capture, stream, store, transform, then a report.",
        examples: [
          ["Wytebox", "Postgres in Supabase is the record. Redpanda carries the stream. Railway runs the workers. Neo4j holds the graph after enrichment."],
          ["Workday", "Airbyte ingested, dbt transformed, and Spark handled the volume. A CDP sat between behavior and personalization."],
          ["Measurement", "Tableau, Looker, and Google Analytics. The report had to match the CRM and hold up in a finance meeting."]
        ]
      },
      {
        id: "supabase", band: "Data", span: "95%", chip: "Supabase",
        kicker: "Data",
        title: "Supabase",
        lead: "Supabase is the Wytebox system of record. Postgres holds tenant data, auth holds identity, and row-level security keeps one account from reading another.",
        examples: [
          ["Wytebox", "Activity lands here after ingest. The product, the agents, and MCP all read this store. The graph and the vectors are projections of it."]
        ]
      },
      {
        id: "postgres", band: "Data", span: "95%", chip: "Postgres",
        kicker: "Data",
        title: "Postgres",
        lead: "Postgres holds the rows. On Wytebox that database is Supabase. On AWS the same schema is RDS or Aurora, with the same row-level rules.",
        examples: [
          ["Wytebox", "Schema, backups, and account scope live here. Neo4j and pgvector point at these rows. They do not replace them."]
        ]
      },
      {
        id: "redpanda", band: "Data", span: "95%", chip: "Redpanda",
        kicker: "Data",
        title: "Redpanda",
        lead: "Redpanda is the Kafka-compatible bus in Wytebox. The desktop publishes encrypted activity. Workers consume it, decrypt, and pass derived events on.",
        examples: [
          ["Wytebox", "Raw activity stays ciphertext on the bus. Later topics carry the events the enrichment workers need."],
          ["AWS", "The same contract can run on MSK. The agent already speaks Kafka, TLS, and SCRAM."]
        ]
      },
      {
        id: "railway", band: "Data", span: "95%", chip: "Railway",
        kicker: "Data",
        title: "Railway",
        lead: "Railway runs the Wytebox workers that cannot be a short web request. They ingest, decrypt, chunk, call the model, and sync the graph.",
        examples: [
          ["Wytebox", "Those consumers are the enrichment pipeline. The same jobs move onto AWS compute when the data plane is in one account."]
        ]
      },
      {
        id: "airbyte", band: "Data", span: "95%", chip: "Airbyte",
        kicker: "Data",
        title: "Airbyte",
        lead: "At Workday, Airbyte ingested source data into the place dbt could transform it. It was the front of the pipeline under campaign and product reporting.",
        examples: [
          ["Workday", "Ingestion first, then dbt, then the warehouse the reports read. Personalization and the lead lifecycle used that path."]
        ]
      },
      {
        id: "dbt", band: "Data", span: "95%", chip: "dbt",
        kicker: "Data",
        title: "dbt",
        lead: "At Workday, dbt was the transformation layer between ingestion and the reports leadership used. The models were defined in code, so a number could be repeated.",
        examples: [
          ["Workday", "It sat after Airbyte and before Tableau and Looker. If the definition was wrong, the dashboard was wrong."]
        ]
      },
      {
        id: "spark", band: "Data", span: "95%", chip: "Spark",
        kicker: "Data",
        title: "Spark",
        lead: "At Workday, Spark processed the campaign and product data that was too large for a single warehouse query.",
        examples: [
          ["Workday", "Used where the volume required it, next to Airbyte and dbt. It did not replace the warehouse."]
        ]
      },
      {
        id: "looker", band: "Data", span: "95%", chip: "Looker",
        kicker: "Data",
        title: "Looker",
        lead: "At Workday, Looker was a leadership and sales report on the warehouse. The measures were ones a forecast meeting would actually use.",
        examples: [
          ["Workday", "Paired with Tableau. Finance, sales, and product analytics needed the same read of pipeline and performance."]
        ]
      },
      {
        id: "tableau", band: "Data", span: "95%", chip: "Tableau",
        kicker: "Data",
        title: "Tableau",
        lead: "At Workday, Tableau was the other leadership surface. It had to match Looker and the CRM. A report that disagreed with the opportunity was not usable.",
        examples: [
          ["Workday", "Built for sales and leadership, with finance and product analytics looking at the same numbers."]
        ]
      },
      {
        id: "systems", band: "Systems", span: "98%", chip: "Systems",
        kicker: "Systems",
        title: "Systems of record",
        lead: "The practical business stack, across companies. CRM and automation, the tracker the team used, the creative tools, the books, and the ads console. They had to agree on an account.",
        examples: [
          ["Marketing", "Admin on Salesforce, Pardot, Marketo, HubSpot, Iterable, and ActionIQ. Google Ads and Google Analytics on the same programs."],
          ["The work", "Jira, Confluence, Asana, ClickUp, Notion, and Slack. Whichever system the company used to assign the work and keep the brief."],
          ["Making it", "Photoshop for finished campaign files. Canva when the asset had to move the same day. Decks, stills, ads, and print."],
          ["Wytebox", "HubSpot and Apollo for go-to-market. Xero, Stripe, Mercury, and Gusto for the company. Agents keep those books in step."]
        ]
      },
      {
        id: "hubspot", band: "Systems", span: "98%", chip: "HubSpot",
        kicker: "Systems",
        title: "HubSpot",
        lead: "HubSpot is the Wytebox CRM. Pipeline, go-to-market, and the agents that watch sequence state all read the same account record.",
        examples: [
          ["Wytebox", "Run end to end, with no separate operations team. Paid tests and partner conversations land in that record."]
        ]
      },
      {
        id: "salesforce", band: "Systems", span: "98%", chip: "Salesforce",
        kicker: "Systems",
        title: "Salesforce",
        lead: "At CollabNet, Salesforce was the system of record for the opportunity. Marketing automation had to hand off into the account sales already saw.",
        examples: [
          ["CollabNet", "Admin on Salesforce and Marketo. A lead that did not match the account was a broken handoff."]
        ]
      },
      {
        id: "marketo", band: "Systems", span: "98%", chip: "Marketo",
        kicker: "Systems",
        title: "Marketo",
        lead: "At CollabNet, Marketo ran lists and nurture. It was administered in-house, and it had to agree with Salesforce before a lead was treated as real.",
        examples: [
          ["CollabNet", "Nurture and the sales handoff used the same offer. SEO and SEM fed that offer."]
        ]
      },
      {
        id: "iterable", band: "Systems", span: "98%", chip: "Iterable",
        kicker: "Systems",
        title: "Iterable",
        lead: "At Atlassian, Iterable sent lifecycle messages across email, SMS, push, and web. Audiences came from ActionIQ, so the people in the segment were the people who got the message.",
        examples: [
          ["Atlassian", "Used on the same programs as paid media and Google Analytics, on a portfolio on the order of $100M a year."]
        ]
      },
      {
        id: "actioniq", band: "Systems", span: "98%", chip: "ActionIQ",
        kicker: "Systems",
        title: "ActionIQ",
        lead: "At Atlassian, ActionIQ was the customer data platform in the journey. It built the audiences that Iterable and paid media used.",
        examples: [
          ["Atlassian", "Campaign, product, and customer data were read together there."]
        ]
      },
      {
        id: "ads", band: "Systems", span: "98%", chip: "Google Ads",
        kicker: "Systems",
        title: "Google Ads",
        lead: "Google Ads was hands-on paid search. At CollabNet it sat inside a $1M+ SEO and SEM budget. At Unitek it was run directly, beside TV, radio, outdoor, and print.",
        examples: [
          ["CollabNet", "The ad and the page used the same offer. Google Ads certified."],
          ["Unitek", "PPC was run directly, including work that was not handed to an agency."]
        ]
      },
      {
        id: "jira", band: "Systems", span: "98%", chip: "Jira",
        kicker: "Systems",
        title: "Jira",
        lead: "Jira was both a product in the Atlassian portfolio and the system used to run campaign delivery. The marketing work followed Agile, Kanban, and SAFe.",
        examples: [
          ["Atlassian", "Cross-product campaigns were tracked in Jira, with product marketing, content, design, sales, and agencies on the same timeline."]
        ]
      },
      {
        id: "gainsight", band: "Systems", span: "98%", chip: "Gainsight",
        kicker: "Systems",
        title: "Gainsight",
        lead: "At Atlassian, Gainsight was how customer health was read next to the campaign. It was used with analytics and customer-success partners.",
        examples: [
          ["Atlassian", "Gainsight and LaunchDarkly sat in the same review as the journey and the media, so a flag, a health score, and a campaign could be looked at together."]
        ]
      },
      {
        id: "pardot", band: "Systems", span: "98%", chip: "Pardot",
        kicker: "Systems",
        title: "Pardot",
        lead: "Pardot was Salesforce automation, administered in-house. Lists, nurture, and scoring had to land on the same opportunity sales already had open.",
        examples: [
          ["Across roles", "Platform admin, next to Salesforce and Marketo. The email path and the CRM account were the same record."]
        ]
      },
      {
        id: "asana", band: "Systems", span: "98%", chip: "Asana",
        kicker: "Systems",
        title: "Asana",
        lead: "Asana ran the work when the team was not living in Jira. Campaign tasks, owners, and dates sat there so marketing and the people they depended on saw the same list.",
        examples: [
          ["Across roles", "Used as the operating tracker for programs, reviews, and handoffs. The brief and the status lived in the task."]
        ]
      },
      {
        id: "clickup", band: "Systems", span: "98%", chip: "ClickUp",
        kicker: "Systems",
        title: "ClickUp",
        lead: "ClickUp was the tracker when that was the company tool. Tasks, docs, and status lived there.",
        examples: [
          ["Across roles", "Work was assigned and closed there. Status in ClickUp had to match status in the CRM."]
        ]
      },
      {
        id: "confluence", band: "Systems", span: "98%", chip: "Confluence",
        kicker: "Systems",
        title: "Confluence",
        lead: "Confluence held the brief, the readout, and the decision next to the Jira work. At Atlassian it was both a product being marketed and the place the campaign record lived.",
        examples: [
          ["Atlassian", "Launch notes, audience definitions, and post-campaign readouts sat in Confluence, linked to the Jira delivery."]
        ]
      },
      {
        id: "notion", band: "Systems", span: "98%", chip: "Notion",
        kicker: "Systems",
        title: "Notion",
        lead: "Notion held operating notes, plans, and the working drafts that were not ready for the CRM or the tracker.",
        examples: [
          ["Across roles", "Used for the plan and the running notes. The system of record stayed HubSpot, Salesforce, or Jira. Notion was where the thinking was written down."]
        ]
      },
      {
        id: "slack", band: "Systems", span: "98%", chip: "Slack",
        kicker: "Systems",
        title: "Slack",
        lead: "Slack is where the operating review shows up. Pipeline, customer health, and job failures are posted there so they are not waiting in a dashboard nobody opened.",
        examples: [
          ["Wytebox", "Agents post the outbound digest, the weekly customer-health note, and ops failures to Slack."],
          ["Across roles", "The working channel for campaign teams. Decisions that mattered were still written back to Jira, Confluence, or the CRM."]
        ]
      },
      {
        id: "apollo", band: "Systems", span: "98%", chip: "Apollo",
        kicker: "Systems",
        title: "Apollo",
        lead: "Apollo runs Wytebox outbound. Email, LinkedIn, and phone sequences, mailbox health, and the sync back to HubSpot so the CRM and the sequence describe the same person.",
        examples: [
          ["Wytebox", "Sequences, caps, and deliverability are watched by agents. Warmth and next-touch dates are mirrored into HubSpot."]
        ]
      },
      {
        id: "launchdarkly", band: "Systems", span: "98%", chip: "LaunchDarkly",
        kicker: "Systems",
        title: "LaunchDarkly",
        lead: "At Atlassian, LaunchDarkly flags were read with the campaign and with Gainsight. A flagged experience, a journey, and the media were reviewed together.",
        examples: [
          ["Atlassian", "Used with analytics and product partners, in the same review as the campaign."]
        ]
      },
      {
        id: "photoshop", band: "Systems", span: "98%", chip: "Photoshop",
        kicker: "Systems",
        title: "Photoshop",
        lead: "Photoshop was for the finished file. Ads, landing pages, outdoor, and print that had to match the offer.",
        examples: [
          ["Campaigns", "Used on the assets that ran. The page, the ad, and the print piece carried the same offer."]
        ]
      },
      {
        id: "canva", band: "Systems", span: "98%", chip: "Canva",
        kicker: "Systems",
        title: "Canva",
        lead: "Canva was the fast path for stills, social, and decks when a full Photoshop file was the wrong amount of work for the deadline.",
        examples: [
          ["Campaigns", "Stills and simple layouts shipped from Canva. Heavier production stayed in Photoshop."]
        ]
      },
      {
        id: "ga", band: "Systems", span: "98%", chip: "Google Analytics",
        kicker: "Systems",
        title: "Google Analytics",
        lead: "Google Analytics was the web measurement system on the programs, administered directly. Spend and creative moved when the stage numbers said to.",
        examples: [
          ["Atlassian", "Read with Iterable, paid media, and the Google Marketing Platform on the same campaigns."],
          ["Across roles", "Platform admin, with the CRM. A conversion was counted when analytics and the opportunity agreed."]
        ]
      },
      {
        id: "xero", band: "Systems", span: "98%", chip: "Xero",
        kicker: "Systems",
        title: "Xero",
        lead: "Xero is the Wytebox ledger. Bank activity from Mercury is categorized and pushed in. Invoices and the monthly true-up are run against it.",
        examples: [
          ["Wytebox", "Agents apply bank rules, sync expenses, and chase overdue invoices."]
        ]
      },
      {
        id: "stripe", band: "Systems", span: "98%", chip: "Stripe",
        kicker: "Systems",
        title: "Stripe",
        lead: "Stripe is how Wytebox takes payment. Those charges are converted into a form Xero can import, so revenue in the processor and revenue in the ledger match.",
        examples: [
          ["Wytebox", "Payment exports feed the books. Revenue figures in a pitch come from this path."]
        ]
      },
      {
        id: "mercury", band: "Systems", span: "98%", chip: "Mercury",
        kicker: "Systems",
        title: "Mercury",
        lead: "Mercury is the Wytebox bank. Transactions are classified, checked for odd vendor charges, and synced to the sheet, to Supabase, and to Xero.",
        examples: [
          ["Wytebox", "The monthly true-up reconciles Mercury and Xero back to 2024."]
        ]
      },
      {
        id: "gusto", band: "Systems", span: "98%", chip: "Gusto",
        kicker: "Systems",
        title: "Gusto",
        lead: "Gusto runs Wytebox payroll. Company and payroll data are read from the API and kept with the rest of the books.",
        examples: [
          ["Wytebox", "Used with Xero and Mercury. People cost and the rest of the books are looked at together."]
        ]
      },
      {
        id: "cloud", band: "Cloud", span: "100%", chip: "Cloud",
        kicker: "Cloud",
        title: "AWS and GCP",
        lead: "AWS is the account Wytebox runs the data plane in. On GCP, Vertex, a NoSQL store, and vector search were used to build RAG on our data, with object storage for the files.",
        examples: [
          ["AWS", "EC2, ECS, and EKS for long jobs. Lambda for short ones. RDS and Aurora for the record. S3 for objects. MSK for the stream. VPC, IAM, and KMS around the account. Bedrock when the model stays in AWS."],
          ["Wytebox", "Postgres, the bus, the workers, secrets, mail, and artifacts are built to live in one AWS organization."],
          ["GCP", "Vertex for the model and the embeddings. A NoSQL store for the records. Vector search for recall. Cloud Storage for the files. BigQuery, Pub/Sub, Cloud SQL, and the compute products around that system."]
        ]
      },
      {
        id: "aws", band: "Cloud", span: "100%", chip: "AWS",
        kicker: "Cloud",
        title: "AWS",
        lead: "The AWS work is the whole account. Compute, databases, streaming, storage, network, identity, keys, delivery, and model APIs are how the Wytebox data plane is run.",
        examples: [
          ["Compute", "EC2, ECS, EKS, and Lambda. Workers that ingest and enrich, and short calls that should end with the request."],
          ["Data", "RDS and Aurora for Postgres. S3 for objects and artifacts. MSK for the Kafka-compatible stream the desktop already speaks."],
          ["Control", "VPC and IAM for a private network and operator access. KMS for keys. Secrets Manager for credentials. CloudFront and SES for delivery and mail. CloudWatch for logs."]
        ]
      },
      {
        id: "ec2", band: "Cloud", span: "100%", chip: "EC2",
        kicker: "AWS",
        title: "EC2",
        lead: "EC2 runs the Wytebox jobs that have to stay up. That includes ingest, decrypt, and enrichment.",
        examples: [
          ["Wytebox", "Those workers sit on compute in the same account as the database and the stream."]
        ]
      },
      {
        id: "containers", band: "Cloud", span: "100%", chip: "ECS and EKS",
        kicker: "AWS",
        title: "ECS and EKS",
        lead: "ECS and EKS run those same Wytebox workers as containers. Ingest, enrichment, graph sync, and the schedulers are packed that way on AWS.",
        examples: [
          ["Wytebox", "Fargate or EKS. The consumer code stays. The network and the runtime move into the account."]
        ]
      },
      {
        id: "lambda", band: "Cloud", span: "100%", chip: "Lambda",
        kicker: "AWS",
        title: "Lambda",
        lead: "Lambda is for the short call inside the AWS account, the one that ends with the request. The pipeline that holds a stream open stays on EC2 or containers.",
        examples: [
          ["Wytebox", "Used for those short jobs next to the long-running workers."]
        ]
      },
      {
        id: "rds", band: "Cloud", span: "100%", chip: "RDS and Aurora",
        kicker: "AWS",
        title: "RDS and Aurora",
        lead: "RDS and Aurora are Postgres inside the AWS account. The schema and the row-level rules match the Supabase record, once that record lives with the rest of the data plane.",
        examples: [
          ["Wytebox", "Tenant data and activity after ingest live here. The graph and the vectors still point at these rows."]
        ]
      },
      {
        id: "s3", band: "Cloud", span: "100%", chip: "S3",
        kicker: "AWS",
        title: "S3",
        lead: "S3 is object storage in the AWS account. It holds archives, desktop installers, and files that are not rows. Cloud Storage does this job in the GCP RAG system.",
        examples: [
          ["Wytebox", "Update artifacts and exports live here, with CloudFront in front when a device has to fetch them."]
        ]
      },
      {
        id: "msk", band: "Cloud", span: "100%", chip: "MSK",
        kicker: "AWS",
        title: "MSK",
        lead: "MSK is the Kafka-compatible stream inside AWS. The Wytebox desktop already publishes with Kafka, TLS, and SCRAM, so the bus can move without a new agent contract.",
        examples: [
          ["Wytebox", "Encrypted activity in, enrichment events out. Redpanda is the bus in production. MSK is that bus inside the AWS account."]
        ]
      },
      {
        id: "vpc", band: "Cloud", span: "100%", chip: "VPC and IAM",
        kicker: "AWS",
        title: "VPC and IAM",
        lead: "VPC keeps the databases and brokers off the public internet. IAM is how operators sign in, through SSO.",
        examples: [
          ["Wytebox", "The data plane sits on a private network. Operator access goes through IAM."]
        ]
      },
      {
        id: "kms", band: "Cloud", span: "100%", chip: "KMS",
        kicker: "AWS",
        title: "KMS",
        lead: "KMS holds the keys for data at rest in the AWS account, next to the stores those keys protect.",
        examples: [
          ["Wytebox", "Encryption at rest for the record, the objects, and the stream, under a key policy in the same account."]
        ]
      },
      {
        id: "secrets", band: "Cloud", span: "100%", chip: "Secrets Manager",
        kicker: "AWS",
        title: "Secrets Manager",
        lead: "Secrets Manager injects credentials into AWS compute. They are not committed to the repo, and they sit under IAM with the rest of the account.",
        examples: [
          ["Wytebox", "Database, bus, and model credentials for the workers. Infisical does this job where the runtime is not in AWS yet."]
        ]
      },
      {
        id: "bedrock", band: "Cloud", span: "100%", chip: "Bedrock",
        kicker: "AWS",
        title: "Bedrock",
        lead: "Bedrock is the model API inside the AWS account, for inference that should stay with the data. Fireworks, OpenAI, and Together remain available when they are the better model.",
        examples: [
          ["Wytebox", "Used when enrichment or an agent should call a model under the same IAM and network as the data."]
        ]
      },
      {
        id: "gcp", band: "Cloud", span: "100%", chip: "GCP",
        kicker: "Cloud",
        title: "GCP",
        lead: "On GCP, Vertex was used with a NoSQL store and vector search to build a RAG system on our data. Object storage held the files that system retrieved from.",
        examples: [
          ["RAG", "Vertex embedded and answered. The NoSQL store held the records. Vector search recalled them. Cloud Storage held the source files and exports."],
          ["Around it", "BigQuery for analysis. Pub/Sub for events. Cloud SQL for the relational record. Cloud Run, GKE, Cloud Functions, and Compute Engine for the jobs that ran the pipeline."]
        ]
      },
      {
        id: "vertex", band: "Cloud", span: "100%", chip: "Vertex AI",
        kicker: "GCP",
        title: "Vertex AI",
        lead: "Vertex was the model and embedding side of that RAG system. It worked with a NoSQL store and vector search so answers came from our data, with the source files in Cloud Storage.",
        examples: [
          ["Wytebox", "Embeddings and generation ran in Vertex, in the same project as the records and the files they pointed at."],
          ["GCP", "The NoSQL store kept the records. Vector search found them. Object storage kept the files."]
        ]
      },
      {
        id: "bigquery", band: "Cloud", span: "100%", chip: "BigQuery",
        kicker: "GCP",
        title: "BigQuery",
        lead: "BigQuery was where the GCP data was analyzed. Questions that were too large for a dashboard extract ran on the same records the RAG layer retrieved from.",
        examples: [
          ["GCP", "Warehouse queries sat next to Vertex, the NoSQL store, and Cloud Storage."]
        ]
      },
      {
        id: "cloudrun", band: "Cloud", span: "100%", chip: "Cloud Run and GKE",
        kicker: "GCP",
        title: "Cloud Run and GKE",
        lead: "Cloud Run and GKE ran the services around the GCP RAG system. Cloud Run for a service that should scale down. GKE when the workers needed a cluster.",
        examples: [
          ["GCP", "The jobs that embed, index, and answer sat on this compute, next to Vertex, the NoSQL store, and Cloud Storage."]
        ]
      },
      {
        id: "pubsub", band: "Cloud", span: "100%", chip: "Pub/Sub",
        kicker: "GCP",
        title: "Pub/Sub",
        lead: "Pub/Sub moved events through the GCP system. A producer published. A consumer picked up the work of embedding, indexing, or writing a file to object storage.",
        examples: [
          ["GCP", "This is the same role Redpanda and MSK play elsewhere."]
        ]
      },
      {
        id: "gcs", band: "Cloud", span: "100%", chip: "Cloud Storage",
        kicker: "GCP",
        title: "Cloud Storage",
        lead: "Cloud Storage was the object store in the RAG system. Vertex, a NoSQL store, and vector search ran on our data, and the source files and exports lived here with them.",
        examples: [
          ["Wytebox", "Files that did not belong in a table sat in Cloud Storage. The NoSQL store held the records. Vector search recalled them. Vertex generated from that context."],
          ["GCP", "Object storage, the NoSQL records, and the vectors were used together for retrieval."]
        ]
      },
      {
        id: "cloudsql", band: "Cloud", span: "100%", chip: "Cloud SQL",
        kicker: "GCP",
        title: "Cloud SQL",
        lead: "Cloud SQL was the relational store on GCP. Tables lived here when the record needed rows, beside the NoSQL store used for RAG and the files in Cloud Storage.",
        examples: [
          ["GCP", "Retrieval could start in vector search or the NoSQL store and finish against these tables."]
        ]
      },
      {
        id: "functions", band: "Cloud", span: "100%", chip: "Cloud Functions",
        kicker: "GCP",
        title: "Cloud Functions",
        lead: "Cloud Functions ran the short steps in the GCP pipeline. A file landing in Cloud Storage, or a message on Pub/Sub, could start an embed or an index update.",
        examples: [
          ["GCP", "Used for those short calls. Longer workers stayed on Cloud Run, GKE, or Compute Engine."]
        ]
      },
      {
        id: "gce", band: "Cloud", span: "100%", chip: "Compute Engine",
        kicker: "GCP",
        title: "Compute Engine",
        lead: "Compute Engine ran the GCP jobs that needed a machine. Longer indexing and processing sat here when a function or a small service was the wrong shape.",
        examples: [
          ["GCP", "Used beside Cloud Run and GKE, on the same data in the NoSQL store and in Cloud Storage."]
        ]
      },
      {
        id: "endpoint", band: "Endpoint", span: "100%", chip: "Endpoint",
        kicker: "Endpoint",
        title: "Endpoint and identity",
        lead: "This is how Wytebox reaches a company laptop, how people sign in, and how a release gets out.",
        examples: [
          ["Distribution", "Jamf, Intune, Automox, and NinjaOne. The desktop agent ships through the device-management tool the company already uses."],
          ["Identity", "Google Workspace and Entra. A customer can turn on single sign-on. Conditional access stays theirs."],
          ["Release", "GitHub and CI for the build. Vercel for the web app. Infisical for secrets outside AWS. A VPS keeps the Discord agent up."]
        ]
      },
      {
        id: "jamf", band: "Endpoint", span: "100%", chip: "Jamf",
        kicker: "Endpoint",
        title: "Jamf",
        lead: "Jamf is how the Wytebox desktop agent is installed on a Mac fleet. The packaging and the rollout are done in the customer's own device management.",
        examples: [
          ["Wytebox", "The agent ships through Jamf when that is the company standard. The same agent also ships through Intune, Automox, and NinjaOne."]
        ]
      },
      {
        id: "intune", band: "Endpoint", span: "100%", chip: "Intune",
        kicker: "Endpoint",
        title: "Intune",
        lead: "Intune is the Microsoft path for that same rollout. The agent is packaged for the tool IT already uses.",
        examples: [
          ["Wytebox", "The same agent also ships through Jamf, Automox, and NinjaOne."]
        ]
      },
      {
        id: "automox", band: "Endpoint", span: "100%", chip: "Automox",
        kicker: "Endpoint",
        title: "Automox",
        lead: "Automox is a third path for installing the Wytebox agent, where Automox is already how the company patches and deploys software.",
        examples: [
          ["Wytebox", "Supported on purpose. Getting onto the device is part of the product."]
        ]
      },
      {
        id: "ninja", band: "Endpoint", span: "100%", chip: "NinjaOne",
        kicker: "Endpoint",
        title: "NinjaOne",
        lead: "NinjaOne is the fourth device-management path. The same desktop agent is installed through it when NinjaOne is the company standard.",
        examples: [
          ["Wytebox", "Same goal as Jamf, Intune, and Automox. IT does not have to change tools to run the agent."]
        ]
      },
      {
        id: "entra", band: "Endpoint", span: "100%", chip: "Entra",
        kicker: "Endpoint",
        title: "Entra",
        lead: "Entra is Microsoft sign-in for a Wytebox account that turns it on. Wytebox receives the identity assertion. The directory and conditional access stay the customer's.",
        examples: [
          ["Wytebox", "Name, email, and the subject id. Activity data is not sent to Entra. Google sign-in is the other option."]
        ]
      },
      {
        id: "workspace", band: "Endpoint", span: "100%", chip: "Google Workspace",
        kicker: "Endpoint",
        title: "Google Workspace",
        lead: "Google Workspace runs Wytebox's own company directory. Google sign-in is also an option on the product when a customer wants it.",
        examples: [
          ["Wytebox", "Internal mail and identity live here. Customer sign-in is a separate switch, and it only passes the identity assertion."]
        ]
      },
      {
        id: "infisical", band: "Endpoint", span: "100%", chip: "Infisical",
        kicker: "Endpoint",
        title: "Infisical",
        lead: "Infisical stores Wytebox credentials and syncs them into Vercel, Railway, and edge functions. It does not hold activity content.",
        examples: [
          ["Wytebox", "This covers the runtimes that are not inside AWS yet. Secrets Manager is the same job once that compute is in the AWS account."]
        ]
      },
      {
        id: "github", band: "Endpoint", span: "100%", chip: "GitHub",
        kicker: "Endpoint",
        title: "GitHub",
        lead: "GitHub holds the Wytebox repos, the review before merge, and the desktop release channel.",
        examples: [
          ["Wytebox", "Code is reviewed before it merges. Desktop updates can come from GitHub releases, or from S3 and CloudFront when that channel is in AWS."]
        ]
      },
      {
        id: "vercel", band: "Endpoint", span: "100%", chip: "Vercel",
        kicker: "Endpoint",
        title: "Vercel",
        lead: "Vercel hosts the Wytebox web app and the short-lived APIs. Auth, admin, and analytics run here. The long workers do not.",
        examples: [
          ["Wytebox", "Next.js on the request path. Ingest, enrichment, and graph sync run on Railway or on AWS compute."]
        ]
      },
      {
        id: "cicd", band: "Endpoint", span: "100%", chip: "CI/CD",
        kicker: "Endpoint",
        title: "CI/CD",
        lead: "CI/CD is how a Wytebox change is built and released. It is reviewed, built, and shipped into separate production, staging, and development environments.",
        examples: [
          ["Wytebox", "The desktop build and the web app both go through this path."]
        ]
      }
    ]
  };

  var canvas = document.getElementById("view-canvas");
  var win = document.getElementById("view-window");
  var tabButtons = Array.prototype.slice.call(document.querySelectorAll(".view-tab"));
  if (!canvas || !win || !tabButtons.length) return;

  var current = "stack";

  function itemById(view, id) {
    var list = views[view];
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0];
  }

  function paint(item) {
    win.replaceChildren();
    var kicker = document.createElement("p");
    kicker.className = "eyebrow";
    kicker.textContent = item.kicker;
    var title = document.createElement("h3");
    title.textContent = item.title;
    var lead = document.createElement("p");
    lead.className = "window-lead";
    lead.textContent = item.lead;
    var list = document.createElement("ul");
    list.className = "ex";
    item.examples.forEach(function (pair) {
      var li = document.createElement("li");
      var who = document.createElement("span");
      who.className = "who";
      who.textContent = pair[0];
      var what = document.createElement("span");
      what.textContent = pair[1];
      li.append(who, what);
      list.append(li);
    });
    win.append(kicker, title, lead, list);
  }

  function mark(id) {
    canvas.querySelectorAll("[data-id]").forEach(function (el) {
      var on = el.getAttribute("data-id") === id;
      el.classList.toggle("is-on", on);
      if (el.getAttribute("role") === "button" || el.tagName === "BUTTON") {
        el.setAttribute("aria-pressed", on ? "true" : "false");
      }
    });
    if (current === "stack") {
      var item = itemById("stack", id);
      canvas.querySelectorAll(".stratum").forEach(function (el) {
        el.classList.toggle("is-on", el.getAttribute("data-band") === item.band);
      });
    }
  }

  function select(id) {
    mark(id);
    paint(itemById(current, id));
  }

  function bind(root) {
    root.querySelectorAll("[data-id]").forEach(function (el) {
      el.addEventListener("mouseenter", function () { select(el.getAttribute("data-id")); });
      el.addEventListener("focus", function () { select(el.getAttribute("data-id")); });
      el.addEventListener("click", function () { select(el.getAttribute("data-id")); });
    });
  }

  function funnelView() {
    var wrap = document.createElement("div");
    wrap.className = "funnel";
    views.funnel.forEach(function (stage) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "funnel-stage";
      btn.setAttribute("data-id", stage.id);
      btn.setAttribute("aria-pressed", "false");
      btn.style.setProperty("--span", stage.span);
      var name = document.createElement("span");
      name.className = "funnel-name";
      name.textContent = stage.label;
      var shape = document.createElement("span");
      shape.className = "funnel-shape";
      shape.setAttribute("aria-hidden", "true");
      btn.append(name, shape);
      wrap.append(btn);
      if (stage.breakAfter) {
        var note = document.createElement("p");
        note.className = "funnel-break";
        note.textContent = "After the sale";
        wrap.append(note);
      }
    });
    return wrap;
  }

  function carView() {
    var wrap = document.createElement("div");
    wrap.className = "car-wrap";
    wrap.innerHTML = [
      '<div class="car-photo">',
      '<img src="car-cutaway.png" alt="Cutaway of a car. Engine, steering wheel, drivetrain, and rear wheel can be inspected.">',
      '<button type="button" class="hot car-hit" data-id="drivetrain" aria-label="Drivetrain" style="left:33%;top:36%;width:46%;height:28%"></button>',
      '<button type="button" class="hot car-hit car-hit-round" data-id="engine" aria-label="Engine" style="left:11%;top:50%;width:25%;height:20%"></button>',
      '<button type="button" class="hot car-hit car-hit-round" data-id="steer" aria-label="Steering wheel" style="left:39%;top:18%;width:14%;height:18%"></button>',
      '<button type="button" class="hot car-hit car-hit-round" data-id="wheel" aria-label="Rear wheel" style="left:76%;top:38%;width:16%;height:30%"></button>',
      '</div>'
    ].join("");
    return wrap;
  }

  function stackView() {
    var wrap = document.createElement("div");
    wrap.className = "stack";
    var bands = [];
    views.stack.forEach(function (item) {
      var band = null;
      for (var i = 0; i < bands.length; i++) {
        if (bands[i].name === item.band) band = bands[i];
      }
      if (!band) {
        band = { name: item.band, span: item.span, items: [] };
        bands.push(band);
      }
      band.items.push(item);
    });
    bands.forEach(function (band) {
      var stratum = document.createElement("div");
      stratum.className = "stratum";
      stratum.setAttribute("data-band", band.name);
      stratum.style.setProperty("--span", band.span);
      var head = document.createElement("button");
      head.type = "button";
      head.className = "stratum-name";
      head.setAttribute("data-id", band.items[0].id);
      head.setAttribute("aria-pressed", "false");
      head.textContent = band.name;
      var chips = document.createElement("div");
      chips.className = "stack-chips";
      band.items.slice(1).forEach(function (item) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "stack-chip";
        chip.setAttribute("data-id", item.id);
        chip.setAttribute("aria-pressed", "false");
        chip.textContent = item.chip;
        chips.append(chip);
      });
      stratum.append(head, chips);
      wrap.append(stratum);
    });
    return wrap;
  }

  var builders = { funnel: funnelView, car: carView, stack: stackView };

  function render(view) {
    current = view;
    canvas.replaceChildren(builders[view]());
    bind(canvas);
    select(views[view][0].id);
  }

  function activateTab(view) {
    tabButtons.forEach(function (btn) {
      var on = btn.id === "tab-" + view;
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
    });
    render(view);
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activateTab(btn.id.replace("tab-", ""));
      btn.focus();
    });
    btn.addEventListener("keydown", function (event) {
      var index = tabButtons.indexOf(btn);
      var next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabButtons.length;
      else if (event.key === "ArrowLeft") next = (index - 1 + tabButtons.length) % tabButtons.length;
      else return;
      event.preventDefault();
      var view = tabButtons[next].id.replace("tab-", "");
      activateTab(view);
      tabButtons[next].focus();
    });
  });

  var hashView = (location.hash || "").replace("#", "");
  render(views[hashView] ? hashView : "stack");
  if (views[hashView]) activateTab(hashView);
})();
