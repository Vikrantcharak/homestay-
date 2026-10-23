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
  whatsapp: "919XXXXXXXXX",

  // Number guests can call (usually the same as WhatsApp). Same format.
  phone: "919XXXXXXXXX",

  // How the phone number is written on the page.
  phoneShown: "+91 9XXXX XXXXX",

  email: "yourname@example.com",

  // Google Maps link to the road end where you meet guests.
  mapsLink: "https://maps.app.goo.gl/6ka5EgMHPzRz6aM27",
  placeName: "Ordi, near Bharmour",
  address: "Ordi, Bharmour tehsil, Chamba, Himachal Pradesh 176309",


  /* ── RATES ───────────────────────────────────────────────────── */
  // Write exactly what should appear, e.g. "₹3,500" or "₹3,500 for up to 4"

  rates: {
    oldHouse:   "On request",
    newHouse:   "On request",
    bothHouses: "On request",
    meals:      "On request",
    cook:       "On request",
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

};
