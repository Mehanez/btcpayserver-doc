(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{561:function(e,t,i){e.exports=i.p+"assets/img/Invoices.9727bbc0.png"},562:function(e,t,i){e.exports=i.p+"assets/img/InvoiceFiltering.4c42d63f.gif"},751:function(e,t,i){"use strict";i.r(t);var a=i(35),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"invoices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoices"}},[e._v("#")]),e._v(" Invoices")]),e._v(" "),a("p",[e._v("The invoices page lists the "),a("strong",[e._v("invoices from all stores and "),a("RouterLink",{attrs:{to:"/Apps/"}},[e._v("apps")]),e._v(" and "),a("RouterLink",{attrs:{to:"/PaymentRequests/"}},[e._v("payment requests")]),e._v(" in BTCPay Server")],1),e._v(".\nIt cumulatively sorts invoices by date and allows plenty of customization options for a better invoice management.")]),e._v(" "),a("h2",{attrs:{id:"managing-invoices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-invoices"}},[e._v("#")]),e._v(" Managing Invoices")]),e._v(" "),a("figure",[a("img",{attrs:{src:i(561),alt:"Invoices Interface",title:"BTCPay Server invoices"}})]),e._v(" "),a("h3",{attrs:{id:"invoice-filtering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-filtering"}},[e._v("#")]),e._v(" Invoice Filtering")]),e._v(" "),a("p",[e._v("Invoices can be filtered via the quick filters located next to the search button or via the advanced filters which can be toggled by clicking the (Help) link on the top of the page.\nUsers can "),a("strong",[e._v("filter invoices")]),e._v(" by store, order id, item id, status or a date.")]),e._v(" "),a("figure",[a("img",{attrs:{src:i(562),alt:"Invoice Filtering",title:"Filter BTCPay Server invoices"}})]),e._v(" "),a("h3",{attrs:{id:"invoice-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-export"}},[e._v("#")]),e._v(" Invoice Export")]),e._v(" "),a("p",[a("strong",[e._v("BTCPay Server Invoices can be exported in CSV or JSON format")]),e._v(".\nFor more information about invoice export and accounting, "),a("RouterLink",{attrs:{to:"/Accounting/"}},[e._v("see this page")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"invoice-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-details"}},[e._v("#")]),e._v(" Invoice Details")]),e._v(" "),a("p",[e._v("The invoice details page contains all information related to an invoice.")]),e._v(" "),a("p",[e._v("Invoice information is created automatically based on invoice status, exchange rate, etc. Product information is created automatically if the invoice was created with product information such as in the Point of Sale app. Read about collecting Buyer information "),a("RouterLink",{attrs:{to:"/FAQ/Stores/#how-to-collect-additional-buyer-information"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"invoice-statuses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoice-statuses"}},[e._v("#")]),e._v(" Invoice Statuses")]),e._v(" "),a("p",[e._v("Table below lists and describes common invoice statuses in BTCPay and suggests common actions.\nActions are just recommendations.\nIt's up to users to define best course of action for their use-case and business.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Invoice Status")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Action")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("New")]),e._v(" "),a("td",[e._v("Not paid, invoice timer still has not expired")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("New (paidPartial)")]),e._v(" "),a("td",[e._v("Not paid in full, invoice timer still has not expired")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("Expired")]),e._v(" "),a("td",[e._v("Not paid, invoice timer expired")]),e._v(" "),a("td",[e._v("None")])]),e._v(" "),a("tr",[a("td",[e._v("Paid")]),e._v(" "),a("td",[e._v("Paid, but has not received sufficient amount of confirmations specified in the Store Settings")]),e._v(" "),a("td",[e._v("Wait for confirmations (The invoice should become - complete)")])]),e._v(" "),a("tr",[a("td",[e._v("Confirmed*")]),e._v(" "),a("td",[e._v("Paid, confirmed, by reaching the number of confirmations in store settings but has not received the default number (6) of confirmations in BTCPay.")]),e._v(" "),a("td",[e._v("Wait for remaining confirmations, or proceed if store settings confirmations is acceptable")])]),e._v(" "),a("tr",[a("td",[e._v("Complete")]),e._v(" "),a("td",[e._v("Paid, completed, received sufficient amount of confirmations in store")]),e._v(" "),a("td",[e._v("Fulfil the order")])]),e._v(" "),a("tr",[a("td",[e._v("Complete (marked)")]),e._v(" "),a("td",[e._v("Status was manually changed to complete from an invalid or expired status")]),e._v(" "),a("td",[e._v("Store admin has marked the payment as complete")])]),e._v(" "),a("tr",[a("td",[e._v("Expired (paidPartial)**")]),e._v(" "),a("td",[e._v("Paid, not in full amount, and expired")]),e._v(" "),a("td",[e._v("Contact buyer to arrange a refund or ask for them to pay their due. Optionally mark invoice as complete or invalid")])]),e._v(" "),a("tr",[a("td",[e._v("Expired (paidLate)")]),e._v(" "),a("td",[e._v("Paid, in full amount, after expired")]),e._v(" "),a("td",[e._v("Contact buyer to arrange a refund or process order if late confirmations are acceptable.")])]),e._v(" "),a("tr",[a("td",[e._v("Paid (paidOver)")]),e._v(" "),a("td",[e._v("Paid more than the invoice amount, but has not received sufficient amount of confirmations specified in the Store Settings")]),e._v(" "),a("td",[e._v("Wait for confirmations. The invoice should become - Complete (Paid Over)")])]),e._v(" "),a("tr",[a("td",[e._v("Complete (paidOver)")]),e._v(" "),a("td",[e._v("Paid more than the invoice amount, completed, received sufficient amount of confirmations")]),e._v(" "),a("td",[e._v("Contact buyer to arrange a refund for the extra amount, or optionally wait for buyer to contact you")])]),e._v(" "),a("tr",[a("td",[e._v("Invalid***")]),e._v(" "),a("td",[e._v("Paid, but failed to receive sufficient amount of confirmations within the time specified in store settings")]),e._v(" "),a("td",[e._v("Check the transaction on a blockchain explorer, if it received sufficient confirmations, mark as complete")])]),e._v(" "),a("tr",[a("td",[e._v("Invalid (marked)")]),e._v(" "),a("td",[e._v("Status was manually changed to invalid from a complete or expired status")]),e._v(" "),a("td",[e._v("Store admin has marked the payment as invalid")])]),e._v(" "),a("tr",[a("td",[e._v("Invalid (paidOver)")]),e._v(" "),a("td",[e._v("Paid more than the invoice amount, but failed to receive sufficient amount of confirmations within the time specified in store settings")]),e._v(" "),a("td",[e._v("Check the transaction on a blockchain explorer, if it received sufficient confirmations, mark as complete")])])])]),e._v(" "),a("ul",[a("li",[e._v("*Invoices paid via the "),a("RouterLink",{attrs:{to:"/LightningNetwork/"}},[e._v("Lightning Network")]),e._v(" immediately go to a completed state, as their confirmation is instant.")],1),e._v(" "),a("li",[e._v("**Paid Partial invoice usually happens when a buyer pays the invoice from the exchange wallet  which takes a fee for their service and deducts it from a total. In some cases, it happens when buyer enters an  incorrect amount in their wallet.")]),e._v(" "),a("li",[e._v("***Invalid - If you're receiving a lot of invalid invoices in your store, you may want to "),a("RouterLink",{attrs:{to:"/FAQ/Stores/#payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[e._v("adjust invalid invoice time in store settings")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"archived-invoices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archived-invoices"}},[e._v("#")]),e._v(" Archived Invoices")]),e._v(" "),a("p",[e._v("As a result of the no address re-use feature of BTCPay Server, it's common to see many expired invoices in your store's invoice page. To hide them from your view, select them in the list and mark them as "),a("strong",[e._v("archived")]),e._v(". Invoices that have been marked as archived are not deleted. Payment to an archived invoice will still be detected by your BTCPay Server (paidLate status). You can view the store's archived invoices at any time by selecting archived invoices from the search filter dropdown.")])])}),[],!1,null,null,null);t.default=o.exports}}]);