class Solution {
    /**
     *
     *
     * 1. Concatenation -> Not Good
     * hello world -> hello-world -> hello world
     * 2. Number transformation
     * hello, world -> "1-2-3-3-4:5-4-6-7-8" -> hello, world
     * 2.1 Number transformation
     * [] -> "" -> []
     * [""] -> "[]" -> [""]
     * ["",""] -> "[:]" -> ["",""]
     * hello, world -> "[1-2-3-3-4:5-4-6-7-8]" -> hello, world
     *
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encodedStrs = [];

        for (const str of strs) {
            const charCodes = [];

            for (let i = 0; i < str.length; i++) {
                const charCode = str.charCodeAt(i);
                charCodes.push(charCode);
            }

            const encodedStr = charCodes.join("-");
            encodedStrs.push(encodedStr);
        }

        let result = encodedStrs.join(":");

        if (strs.length) {
            result = "[" + result + "]";
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let correctStr = str
        if (str.includes("[")) {
            correctStr = str.replace("[", "");
            correctStr = correctStr.replace("]", "");
        } else {
            return [];
        }

        const finalStrs = [];
        const wordsInCharCode = correctStr.split(":");

        for (const wordInCharCode of wordsInCharCode) {
            const charCodes = wordInCharCode.split("-");
            const chars = charCodes
                .filter((code) => code.length)
                .map((code) => String.fromCharCode(Number(code)));

            const word = chars.join("");
            finalStrs.push(word);
        }

        return finalStrs;
    }
}
