<script lang="ts">
	import { title, date } from './meta';

	// needed for mount detection to trigger CSS transitions
	// eslint-disable-next-line svelte/prefer-writable-derived
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>{title} - Tom Ford</title>
	<link rel="canonical" href="https://tomrford.com/writing/what-to-do" />
</svelte:head>

<article
	class="prose translate-y-5 opacity-0 transition-all duration-500 ease-in-out dark:prose-invert prose-headings:font-semibold"
	class:opacity-100={mounted}
	class:translate-y-0={mounted}
	style="transition-delay: 0ms"
>
	<h1>{title}</h1>
	<p class="text-[0.95em] text-[#666]">{date}</p>
	<p>
		The former is a question I’ve asked myself regularly in the last year - should I learn Rust or
		Go or Zig, should I take up web development, or learn to write mobile apps, or even pick up more
		hardware projects - all of which provided me with a simple, short-term, clearly(ish) defined end
		goal to reach. But behind all this ‘what should I know to be a better engineer?’ posturing, I
		was actually avoiding the more important question:
	</p>
	<h3>What do I want to do?</h3>
	<p>
		It’s easy to get caught up in preparing - after all we spend 18 years in school, followed by
		another 3/4/5 in higher education - and it’s hard to shake off the idea that ‘if I just learn
		this thing as well, then I’ll be equipped to do what I want’; What do I want, you ask? Well I
		hadn’t really thought of that yet; I was too busy preparing for it. Perhaps it’s just what
		happens when indecision meets the downsides of the term YOLO, but self-awareness in this matter
		is vital in breaking the cycle. If you don’t know what you want to do then how can you know what
		you’ll need?
	</p>
	<p>
		There are obvious caveats to this statement; I might not yet know my billion-dollar startup idea
		but I do know that I need to get a job to feed myself, and that job requires I can write some
		code - so I had to pick that up along the way. I’m not suggesting that you plan out your life
		before doing anything, as that would be just as indecisive in the opposite direction - I’m
		merely saying that most things should be done with a purpose.
	</p>
	<p>
		So how do we solve this? Well, let’s do a little long-term thinking to start with. And I’m not
		suggesting that doing something for no other reason than the enjoyment of it; just don’t kid
		yourself that it’s for a greater purpose. Somewhere on the internet (ChatGPT and Claude couldn’t
		find it, so no citation available) I heard/read about the problem with planning solely for the
		medium term (2-3 years), and the explanation stuck with me. The premise is that 2-3 years feels
		imminent enough for you to let go of short term goals (things in the order of a few months) -
		e.g. skipping a long holiday in favour of pursuing an earlier career move - but captures your
		attention span for long enough that you forget about where you’d like to be in 20 years.
	</p>
	<p>
		This is captured best by those who set their sights on the corporate ladder straight out of
		university and don’t stop until they retire. It involves sacrificing everything else in the
		short term to make gains in the mid term, only to reach the long term and realise that you
		didn’t really think about what you would do at this point, and how much you’ve missed along the
		way.
	</p>
	<p>
		And what does this have to do with understanding what you want to do? When I said do things with
		purpose, you have to also understand the purpose itself. My chasing down of learning every
		technical skill I can find is a result of mid-term thinking; whilst I’ve certainly had some fun
		along the way, would I have done it if I knew I wanted to stay where I was for the rest of my
		life? And equally, if I can’t tell you where I want to be in my forties and fifties, then does
		my choice of systems programming language really have that much effect on my future direction?
	</p>
	<p>
		So what do I want to do? Well, I’m not sure I know that yet, but I can tell you a few things; it
		involves code I haven’t written yet, challenges that haven’t been solved yet and friends I
		haven’t met yet. It’s great if you know more than that, and it’s also ok if you know less. So
		long as you do things with purpose.
	</p>
	<p>
		And what does that mean I need to know? For starters, the location of a place I can write code,
		solve hard challenges and make friends would be nice. We’ll see what comes next.
	</p>
</article>
