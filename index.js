diff --git a/index.js b/index.js
index 4408c2e71bdc37834d04a148c96b2eb3ead07dea..c44349bf72be9c18b4efb7b97e6b77b122ee8760 100644
--- a/index.js
+++ b/index.js
@@ -1,17 +1,28 @@
-document.addEventListener('DOMContentLoaded', function() {
-    var dropbtn = document.querySelector('.dropbtn');
-    var dropdownContent = document.querySelector('.dropdown-content');
-  
-    dropbtn.addEventListener('click', function() {
-      dropdownContent.classList.toggle('show');
-    });
-  
-    document.addEventListener('click', function(event) {
-      if (!event.target.matches('.dropbtn')) {
-        if (dropdownContent.classList.contains('show')) {
-          dropdownContent.classList.remove('show');
-        }
-      }
-    });
-  });
-  
\ No newline at end of file
+document.addEventListener('DOMContentLoaded', () => {
+  const toggle = document.querySelector('.nav__toggle');
+  const menu = document.querySelector('#nav-menu');
+
+  if (!toggle || !menu) return;
+
+  const closeMenu = () => {
+    menu.classList.remove('is-open');
+    toggle.setAttribute('aria-expanded', 'false');
+  };
+
+  toggle.addEventListener('click', () => {
+    const isOpen = menu.classList.toggle('is-open');
+    toggle.setAttribute('aria-expanded', String(isOpen));
+  });
+
+  menu.addEventListener('click', (event) => {
+    if (event.target instanceof HTMLAnchorElement) {
+      closeMenu();
+    }
+  });
+
+  document.addEventListener('click', (event) => {
+    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
+      closeMenu();
+    }
+  });
+});
