import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as claim_space, f as children, g as claim_text, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.d0bc9304.js';

/* src/routes/testimonials.svelte generated by Svelte v3.23.2 */

const file = "src/routes/testimonials.svelte";

function create_fragment(ctx) {
	let link;
	let t0;
	let article;
	let h1;
	let t1;
	let t2;
	let section;
	let ul;
	let li0;
	let t3;
	let br0;
	let br1;
	let t4;
	let h60;
	let t5;
	let t6;
	let li1;
	let t7;
	let br2;
	let br3;
	let t8;
	let h61;
	let t9;
	let t10;
	let li2;
	let t11;
	let br4;
	let br5;
	let t12;
	let h62;
	let t13;
	let t14;
	let li3;
	let t15;
	let br6;
	let br7;
	let t16;
	let h63;
	let t17;
	let t18;
	let li4;
	let t19;
	let br8;
	let br9;
	let t20;
	let h64;
	let t21;

	const block = {
		c: function create() {
			link = element("link");
			t0 = space();
			article = element("article");
			h1 = element("h1");
			t1 = text("Testimonials");
			t2 = space();
			section = element("section");
			ul = element("ul");
			li0 = element("li");
			t3 = text("\"We have worked with KBL Solutions on more than one occasion and have always found them to be\n    Very efficient, easy to communicate with and very reliable whilst meeting difficult deadlines.We will continue to work with them on future projects. Would highly recommend.\"\n    ");
			br0 = element("br");
			br1 = element("br");
			t4 = space();
			h60 = element("h6");
			t5 = text("Commercial Project & Supply Chain Controller - Astley");
			t6 = space();
			li1 = element("li");
			t7 = text("\"KBL solutions delivered a brilliant service when we needed a very quick turnaround on an order. Great communication, efficient delivery and excellent quality product. Highly recommend Karen, will definitely be using KBL solutions going forward.\"\n  ");
			br2 = element("br");
			br3 = element("br");
			t8 = space();
			h61 = element("h6");
			t9 = text("Managing Director - Sip It");
			t10 = space();
			li2 = element("li");
			t11 = text("\"I have found KBL Solutions to be a great company to work with, speedy responses,  competitive prices supplying us with good quality products.\n    Any issues are dealt with quickly and professionally.  They couldn’t be more helpful.\"\n  ");
			br4 = element("br");
			br5 = element("br");
			t12 = space();
			h62 = element("h6");
			t13 = text("Project Support Coordinator - Dreams");
			t14 = space();
			li3 = element("li");
			t15 = text("“I’m always happy to work with Karen at KBL. They are friendly, approachable and good communicators. They provide a prompt service. Keep up the good work”\n    ");
			br6 = element("br");
			br7 = element("br");
			t16 = space();
			h63 = element("h6");
			t17 = text("Inventory Administrator - Tate Business Group");
			t18 = space();
			li4 = element("li");
			t19 = text("\"We have always found Karen @ KBL Solutions to be extremely helpful and efficient with any orders we place with her.  The service we receive is second-to-none.\"\n    ");
			br8 = element("br");
			br9 = element("br");
			t20 = space();
			h64 = element("h6");
			t21 = text("Majestic Wines");
			this.h();
		},
		l: function claim(nodes) {
			link = claim_element(nodes, "LINK", { href: true, rel: true });
			t0 = claim_space(nodes);
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h1 = claim_element(article_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Testimonials");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(article_nodes);
			section = claim_element(article_nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			ul = claim_element(section_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true, id: true });
			var li0_nodes = children(li0);
			t3 = claim_text(li0_nodes, "\"We have worked with KBL Solutions on more than one occasion and have always found them to be\n    Very efficient, easy to communicate with and very reliable whilst meeting difficult deadlines.We will continue to work with them on future projects. Would highly recommend.\"\n    ");
			br0 = claim_element(li0_nodes, "BR", {});
			br1 = claim_element(li0_nodes, "BR", {});
			t4 = claim_space(li0_nodes);
			h60 = claim_element(li0_nodes, "H6", { class: true });
			var h60_nodes = children(h60);
			t5 = claim_text(h60_nodes, "Commercial Project & Supply Chain Controller - Astley");
			h60_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t6 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true, id: true });
			var li1_nodes = children(li1);
			t7 = claim_text(li1_nodes, "\"KBL solutions delivered a brilliant service when we needed a very quick turnaround on an order. Great communication, efficient delivery and excellent quality product. Highly recommend Karen, will definitely be using KBL solutions going forward.\"\n  ");
			br2 = claim_element(li1_nodes, "BR", {});
			br3 = claim_element(li1_nodes, "BR", {});
			t8 = claim_space(li1_nodes);
			h61 = claim_element(li1_nodes, "H6", { class: true });
			var h61_nodes = children(h61);
			t9 = claim_text(h61_nodes, "Managing Director - Sip It");
			h61_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t10 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true, id: true });
			var li2_nodes = children(li2);
			t11 = claim_text(li2_nodes, "\"I have found KBL Solutions to be a great company to work with, speedy responses,  competitive prices supplying us with good quality products.\n    Any issues are dealt with quickly and professionally.  They couldn’t be more helpful.\"\n  ");
			br4 = claim_element(li2_nodes, "BR", {});
			br5 = claim_element(li2_nodes, "BR", {});
			t12 = claim_space(li2_nodes);
			h62 = claim_element(li2_nodes, "H6", { class: true });
			var h62_nodes = children(h62);
			t13 = claim_text(h62_nodes, "Project Support Coordinator - Dreams");
			h62_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t14 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", { class: true, id: true });
			var li3_nodes = children(li3);
			t15 = claim_text(li3_nodes, "“I’m always happy to work with Karen at KBL. They are friendly, approachable and good communicators. They provide a prompt service. Keep up the good work”\n    ");
			br6 = claim_element(li3_nodes, "BR", {});
			br7 = claim_element(li3_nodes, "BR", {});
			t16 = claim_space(li3_nodes);
			h63 = claim_element(li3_nodes, "H6", { class: true });
			var h63_nodes = children(h63);
			t17 = claim_text(h63_nodes, "Inventory Administrator - Tate Business Group");
			h63_nodes.forEach(detach_dev);
			li3_nodes.forEach(detach_dev);
			t18 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", { class: true, id: true });
			var li4_nodes = children(li4);
			t19 = claim_text(li4_nodes, "\"We have always found Karen @ KBL Solutions to be extremely helpful and efficient with any orders we place with her.  The service we receive is second-to-none.\"\n    ");
			br8 = claim_element(li4_nodes, "BR", {});
			br9 = claim_element(li4_nodes, "BR", {});
			t20 = claim_space(li4_nodes);
			h64 = claim_element(li4_nodes, "H6", { class: true });
			var h64_nodes = children(h64);
			t21 = claim_text(h64_nodes, "Majestic Wines");
			h64_nodes.forEach(detach_dev);
			li4_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(link, "href", "https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap");
			attr_dev(link, "rel", "stylesheet");
			add_location(link, file, 2, 0, 2);
			attr_dev(h1, "class", "svelte-1eu6sy0");
			add_location(h1, file, 68, 2, 1139);
			add_location(br0, file, 73, 4, 1570);
			add_location(br1, file, 73, 8, 1574);
			attr_dev(h60, "class", "svelte-1eu6sy0");
			add_location(h60, file, 74, 4, 1583);
			attr_dev(li0, "class", "bubble bubble-bottom-left svelte-1eu6sy0");
			attr_dev(li0, "id", "one");
			add_location(li0, file, 71, 4, 1247);
			add_location(br2, file, 78, 2, 1958);
			add_location(br3, file, 78, 6, 1962);
			attr_dev(h61, "class", "svelte-1eu6sy0");
			add_location(h61, file, 79, 2, 1969);
			attr_dev(li1, "class", "bubble bubble-bottom-left svelte-1eu6sy0");
			attr_dev(li1, "id", "five");
			add_location(li1, file, 76, 2, 1656);
			add_location(br4, file, 84, 2, 2305);
			add_location(br5, file, 84, 6, 2309);
			attr_dev(h62, "class", "svelte-1eu6sy0");
			add_location(h62, file, 85, 2, 2316);
			attr_dev(li2, "class", "bubble bubble-bottom-left svelte-1eu6sy0");
			attr_dev(li2, "id", "three");
			add_location(li2, file, 81, 2, 2015);
			add_location(br6, file, 89, 4, 2591);
			add_location(br7, file, 89, 8, 2595);
			attr_dev(h63, "class", "svelte-1eu6sy0");
			add_location(h63, file, 90, 4, 2604);
			attr_dev(li3, "class", "bubble bubble-bottom-left svelte-1eu6sy0");
			attr_dev(li3, "id", "three");
			add_location(li3, file, 87, 4, 2376);
			add_location(br8, file, 94, 4, 2891);
			add_location(br9, file, 94, 8, 2895);
			attr_dev(h64, "class", "svelte-1eu6sy0");
			add_location(h64, file, 95, 4, 2904);
			attr_dev(li4, "class", "bubble bubble-bottom-left svelte-1eu6sy0");
			attr_dev(li4, "id", "five");
			add_location(li4, file, 92, 4, 2671);
			attr_dev(ul, "class", "testimonials svelte-1eu6sy0");
			add_location(ul, file, 70, 2, 1217);
			attr_dev(section, "class", "section-name padding-y testimonials svelte-1eu6sy0");
			add_location(section, file, 69, 0, 1161);
			attr_dev(article, "class", "content-body svelte-1eu6sy0");
			add_location(article, file, 67, 0, 1106);
		},
		m: function mount(target, anchor) {
			insert_dev(target, link, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, article, anchor);
			append_dev(article, h1);
			append_dev(h1, t1);
			append_dev(article, t2);
			append_dev(article, section);
			append_dev(section, ul);
			append_dev(ul, li0);
			append_dev(li0, t3);
			append_dev(li0, br0);
			append_dev(li0, br1);
			append_dev(li0, t4);
			append_dev(li0, h60);
			append_dev(h60, t5);
			append_dev(ul, t6);
			append_dev(ul, li1);
			append_dev(li1, t7);
			append_dev(li1, br2);
			append_dev(li1, br3);
			append_dev(li1, t8);
			append_dev(li1, h61);
			append_dev(h61, t9);
			append_dev(ul, t10);
			append_dev(ul, li2);
			append_dev(li2, t11);
			append_dev(li2, br4);
			append_dev(li2, br5);
			append_dev(li2, t12);
			append_dev(li2, h62);
			append_dev(h62, t13);
			append_dev(ul, t14);
			append_dev(ul, li3);
			append_dev(li3, t15);
			append_dev(li3, br6);
			append_dev(li3, br7);
			append_dev(li3, t16);
			append_dev(li3, h63);
			append_dev(h63, t17);
			append_dev(ul, t18);
			append_dev(ul, li4);
			append_dev(li4, t19);
			append_dev(li4, br8);
			append_dev(li4, br9);
			append_dev(li4, t20);
			append_dev(li4, h64);
			append_dev(h64, t21);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(link);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(article);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Testimonials> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Testimonials", $$slots, []);
	return [];
}

class Testimonials extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Testimonials",
			options,
			id: create_fragment.name
		});
	}
}

export default Testimonials;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGltb25pYWxzLjAyMGRhYmExLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
