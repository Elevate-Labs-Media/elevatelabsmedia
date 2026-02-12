export default function Footer() {
    return (
        <footer className="py-8 px-6 text-center text-xs text-gray-600 uppercase tracking-widest border-t border-white/5 bg-black">
            &copy; {new Date().getFullYear()} Agency Digital. All rights reserved.
        </footer>
    );
}
