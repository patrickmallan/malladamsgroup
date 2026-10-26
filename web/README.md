# Malladams Group website

The site is a Vite and React application with six routes:

- `/` — introduction to Energetic Architecture and the two expressions of the work
- `/energetic-architecture` — philosophy, energetic blueprint and values
- `/work-with-us` — current private leadership engagements led by Annissa
- `/our-vision` — longer-term environments vision and Squamish connection
- `/about` — founder biographies and distinct roles
- `/connect` — short enquiry form and email link

Run `npm install` and `npm run dev` from this directory to preview locally. Run `npm run build` before deployment.

The enquiry form uses Web3Forms. Set `VITE_WEB3FORMS_ACCESS_KEY` in the deployment environment after verifying the receiving inbox. Without a key, the form shows an email alternative and its submit button is disabled. Because this is a Vite client application, the access key is included in the built JavaScript; use a key intended for browser submission and configure the form service's domain protections. Check the receiving address and a real submission before publishing.

See [website evolution review](../WEBSITE_EVOLUTION_REVIEW.md) for content decisions and outstanding approvals.
