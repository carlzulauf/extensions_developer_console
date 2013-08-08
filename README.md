Extensions Developer Console
============================

Simple extension for Google Chrome, and possibly other browsers.

Goal
----

Provide a console imbued with access to internal browser APIs.

Background
----------

I love developing with access to a good console. When developing extensions, the existing browser console fails to provide access to internal APIs. Sure, I can inspect parts of my extension and set debug targets to get access to a console, but sometimes I just want to play with an internal API before I've even started with an actual extension. Building or modifying a manifest file with the proper permissions and then installing a bare extension is a cumbersome step just to get console access to powerful internal services. Maybe the data returned by the internal API isn't what I thought, and I just wasted time starting an extension I'm not going to finish. Maybe I just needed the data just this once.

What is needed is a super simple extension which does nothing more than provide a console with direct access to as many browser tools as possible. No fiddling with permissions or hopefully even having to inspect anything, just a good old chrome console with more power and less limits.
