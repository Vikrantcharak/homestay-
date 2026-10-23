# Gharuru — homestay website

Two houses in the forest across the Ravi, below Bharmour.

The whole site is three things:

| File / folder | What it is | Do you edit it? |
|---|---|---|
| `settings.js` | Phone, WhatsApp, email, rates, house details | **Yes, this is the one** |
| `photos/` | Your photos. Names are listed in `photos/README.txt` | **Yes, add photos here** |
| `index.html` | The website itself | Only for text changes |

---

## Publish it online for free (GitHub Pages)

Do this once. It takes about 5 minutes.

1. Open **https://github.com/Vikrantcharak/homestay-** and sign in.
2. Click **Settings** (top of the repo, gear icon).
   On a phone, use the browser's "Desktop site" option if you can't see it.
3. In the left menu, click **Pages**.
4. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, and the folder `/ (root)`
   - Click **Save**.
5. Wait 1–2 minutes, then refresh the page. A box appears at the top:
   **"Your site is live at https://vikrantcharak.github.io/homestay-/"**
6. Open that link on your phone and check everything.
   Share the link on WhatsApp, Instagram and Google Maps.

From now on, every change you save on GitHub goes live automatically
within a minute or two.

---

## Everyday changes (no computer skills needed)

### Change the phone number, email or rates
1. On GitHub, click **`settings.js`**.
2. Click the **pencil icon** (Edit this file).
3. Change only the words between the double quotes `" "`.
   Keep the quotes and the commas.
4. Click **Commit changes…** → **Commit changes**.
5. Wait a minute and refresh your website.

### Add photos
1. Rename each photo exactly as listed in `photos/README.txt`
   (for example `crossing.jpg`).
2. On GitHub, open the **`photos`** folder.
3. Click **Add file** → **Upload files**, then drag the photos in.
4. Click **Commit changes**.

### Add your welcome note and guest reviews
Both are in `settings.js` (look for **A WORD FROM YOU** and **GUEST REVIEWS**).
Each section stays hidden until you fill it in. Use only real reviews, with the guest's permission.

### Show prices in the booking form
If you write a number in `rates` (e.g. `"₹3,500"`), the booking form shows guests an
estimated total (nights × rate) when they choose that house. "On request" shows no estimate.

### Check what's still missing
Open your site with `#setup` at the end, e.g.
`https://vikrantcharak.github.io/homestay-/#setup`. If the WhatsApp number or
email are still placeholders, a yellow checklist appears. Visitors never see it.

---

## Optional: your own address (e.g. gharuru.in)

1. Buy the name from any registrar (GoDaddy, Hostinger, Namecheap, about ₹800–1,000 a year).
2. In the registrar's **DNS** settings add:
   - Four **A** records for `@` pointing to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record for `www` pointing to `vikrantcharak.github.io`
3. On GitHub: **Settings → Pages → Custom domain**, type `gharuru.in`, **Save**.
4. After it verifies (minutes to a few hours), tick **Enforce HTTPS**.

## Also worth doing
- **Google Business Profile** (free, business.google.com): put the homestay on
  Google Maps with this website link. Most guests will find you there.
- Put the website link in your WhatsApp Business profile and Instagram bio.
