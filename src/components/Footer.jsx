import {FaGithub,FaLinkedin,} from "react-icons/fa";

import { SiFiverr } from "react-icons/si";

export default function Footer() {

return (

<footer
className="
bg-black
text-gray-400
py-10
"
>

<div
className="
max-w-6xl
mx-auto
text-center
"
>

<h2
className="
text-3xl
font-bold
text-cyan-400
"
>
Khushi.dev
</h2>

<p className="mt-4">
MERN Stack Developer • Freelancer
</p>

<div
className="
flex
justify-center
gap-8
mt-8
text-3xl
"
>

<FaGithub />

<FaLinkedin />

<SiFiverr />

</div>

<p className="mt-8">
© 2026 All Rights Reserved
</p>

</div>

</footer>

);
}