/* ═══════════════════════════════════════════════════════════════════
   GHARURU — SETTINGS

   This is the only file you need to change for everyday updates:
   phone number, email, rates and house details.

   How to edit:
     • Change only the words between the double quotes  "  "
     • Keep the quotes, and keep the comma at the end of each line
     • Save, refresh the website, and check it looks right

   If you leave something empty ("") the page keeps its default text.
   ═══════════════════════════════════════════════════════════════════ */

window.SITE = {

  /* ── CONTACT ─────────────────────────────────────────────────── */

  // WhatsApp number: country code + number, digits only. No +, no spaces.
  // Example: an Indian mobile 98765 43210  →  "919876543210"
  whatsapp: "917807247594",

  // Number guests can call (usually the same as WhatsApp). Same format.
  phone: "917807247594",

  // How the phone number is written on the page.
  phoneShown: "+91 78072 47594",

  email: "charakvikrant48@gmail.com",

  // Google Maps link to the road end where you meet guests.
  mapsLink: "https://maps.app.goo.gl/6ka5EgMHPzRz6aM27",
  placeName: "Ordi, near Bharmour",
  address: "Ordi, Bharmour tehsil, Chamba, Himachal Pradesh 176309",


  /* ── RATES ───────────────────────────────────────────────────── */
  // Write exactly what should appear, e.g. "₹1,500" or "₹1,500 per person"

  rates: {
    stay:   "₹1,500",   // per night, food included
    hiking: "₹3,000",   // per day with hiking, food and campfire included

    // Is the price per person, or for the whole group?
    // Write "person" or "group". The booking form then shows guests an
    // estimated total. Leave "" and no estimate is shown.
    per:    "",

    // Optional line shown under the rates, e.g. "Children under 5 stay free."
    note:   "",
  },


  /* ── THE OLD HOUSE ───────────────────────────────────────────── */

  oldHouse: {
    // Two lines of your own: who built it, roughly when, and the one
    // thing you would point out to a guest walking in. Leave "" to hide.
    story:    "",
    sleeps:   "Ask us — we'll match rooms to your group",
    bathroom: "Ask us",
    hotWater: "Ask us",
    kitchen:  "Ask us",
  },


  /* ── THE NEW HOUSE ───────────────────────────────────────────── */

  newHouse: {
    // Two lines: what makes this one comfortable, what you see from it.
    story:    "",
    sleeps:   "Ask us — we'll match rooms to your group",
    bathroom: "Ask us",
    hotWater: "Ask us",
    terrace:  "Yes — the roof terrace is on this house",
  },


  /* ── PRACTICAL ───────────────────────────────────────────────── */

  // Which network works, hours of electricity, any backup.
  signal: "Signal and power in the valley change with the season and the weather. Ask us for the current picture before you come, and plan to be offline for some of your stay.",

  // Cash / UPI.
  payment: "No card machine here and no ATM near the road end. Bring enough cash for your whole stay.",

  // Do you host in winter? What is the walk like with snow? How are the houses heated?
  winter: "Snow on the ridges and short, sharp days. Winter stays are by arrangement — message us before you plan one.",


  /* ── A WORD FROM YOU ─────────────────────────────────────────── */
  // A short welcome in your own words, shown near the top of the page.
  // Leave note empty ("") and this whole section stays hidden.
  // Add photos/host.jpg (a photo of your family) and it appears beside it.

  host: {
    note:  "Happy to welcome you.",
    names: "",   // how you sign it, e.g. "Vikrant and family"
  },


  /* ── AI IMAGES ───────────────────────────────────────────────── */
  // Pictures in the photos folder that were made with AI, not taken at
  // Gharuru. Each one gets a small "AI illustration" label so guests are
  // never misled. When you put a real photo in its place (same name),
  // take its name out of this list.

  aiImages: ["slate", "field", "food", "harvest"],


  /* ── GUEST REVIEWS ───────────────────────────────────────────── */
  // Only real reviews, copied word for word, with the guest's permission.
  // The section stays hidden until you add at least one.
  // Copy the example line, remove the // at the start, and fill it in.
  // stars is optional (1 to 5). Keep the comma after each review.

  reviews: [
    // { text: "What the guest wrote.", name: "First name", from: "City", when: "October 2026", stars: 5 },
  ],

  // Link to your reviews on Google or Airbnb (optional).
  reviewsLink: "",

};
