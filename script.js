// ==========================================
// 1. NIE CURRICULUM DATA (Based on Handbook)
// ==========================================
const curriculum = {
    term1: {
        name: "1 වාරය: ජීවන දැක්ම",
        activities: [
            {
                id: "t1_a1", name: "ක්‍රියාකාරකම 01: ස්වයං කුසලතා හා දුර්වලතා අනාවරණය",
                instructions: "පියවර 1.1: සිසුන් තම ස්වකීය කුසලතා හා දුර්වලතා 10ක් හඳුනාගෙන වගුවක් හෝ ලැයිස්තුවක් ලෙස ඉදිරිපත් කළ යුතුය. ඉන්පසු ඔවුන් කිරීමට කැමති හා අකැමති දෑ 3 බැගින් සටහන් කළ යුතුය.",
                criteria: [
                    { id: "t1_a1_c1", text: "අනාවරණය කර ගත් ස්වකීය කුසලතා හා දුර්වලතා ඉදිරිපත් කරයි.", max: 10, guide: "8-10: නිර්මාණාත්මක අයුරින් ඉදිරිපත් කිරීම (කුසලතා හා දුර්වලතා 8ක් වත් ඇතුළත් වීම අවශ්‍යයි).<br>4-7: වගුවක් ඇසුරින් හෝ ලැයිස්තුවක් ඇසුරින් ඉදිරිපත් කිරීම (කුසලතා හා දුර්වලතා 8ක් වත් ඇතුළත් වීම).<br>1-3: කුසලතා හා දුර්වලතා දක්වා ඇතත් අසම්පූර්ණ වීම හා දුර්වල තත්ත්වයක පැවතීම." },
                    { id: "t1_a1_c2", text: "සාමාන්‍ය ජීවිතයට ප්‍රයෝජනවත් වන කුසලතා ආදර්ශනය කරයි.", max: 10, guide: "8-10: උනන්දුව, කැපවීම, කාල කළමනාකරණය, සැලකිලීමත් ව වැඩ කිරීම ආදී කරුණු 3ක් වත් ඉහළ මට්ටමකින් නිරීක්ෂණය වීම.<br>4-7: උනන්දුව, කැපවීම, කාල කළමනාකරණය ආදී කරුණු සතුටුදායක තත්ත්වයක පෙනෙන්නට තිබීම.<br>1-3: උනන්දුව, කැපවීම ආදී කරුණු සාමාන්‍ය මට්ටමක පැවතීම." }
                ]
            },
            {
                id: "t1_a2", name: "ක්‍රියාකාරකම 02: සිහින දකිමු, සැබෑ කර ගනිමු",
                instructions: "පියවර 2.3: සිසුන් තම මිතුරන්/පවුලේ අයගේ සිහින සොයා බලා, එම සිහින ඇති කර ගැනීමට හේතුව සහ එයින් පුද්ගලයාට හා රටට ලැබෙන ප්‍රතිලාභ වගුවක ඇතුළත් කළ යුතුය.",
                criteria: [
                    { id: "t1_a2_c1", text: "පුද්ගලයන් දකින සිහින සහ ඒවා ඇති කර ගැනීමට හේතුව ඉදිරිපත් කරයි.", max: 10, guide: "8-10: දෙදෙනෙකුගේ සිහින පැහැදිලි ව ලියා එම සිහින ඇති කර ගැනීමට හේතුව එක් එක් පාර්ශ්ව අනුව දැක්වීම.<br>4-7: එක් පාර්ශ්වයකගේ සිහිනය සහ එම සිහිනය ඇති කර ගැනීමට හේතුව දැක්වීම.<br>1-3: සිහිනය සහ සිහිනය ඇති කර ගැනීමට හේතු අඩුපාඩු සහිත ව දැක්වීම." },
                    { id: "t1_a2_c2", text: "සිහිනය සැබෑ කර ගැනීමෙන් පුද්ගලයාට සහ රටට ලැබෙන ප්‍රතිලාභ පෙන්වා දෙයි.", max: 10, guide: "8-10: පුද්ගලයාට සහ රටට ලැබෙන ප්‍රතිලාභ වෙන වෙන ම දැක්වීම.<br>4-7: එක් පාර්ශ්වයකට අදාළ ව එම පුද්ගලයාට සහ රටට ලැබෙන ප්‍රතිලාභ දැක්වීම.<br>1-3: ලැබෙන ප්‍රතිලාභ අඩුපාඩු සහිත." }
                ]
            },
            {
                id: "t1_a3", name: "ක්‍රියාකාරකම 03: ගැටලු හඳුනා ගෙන විසඳමු",
                instructions: "පියවර 3.1: පරිසරයේ හෝ සමාජයේ පවත්නා ගැටලුවක් හඳුනාගෙන, ඊට උචිත විසඳුමක් සහ එම විසඳුම ලබා ගැනීමට ගත හැකි ක්‍රියාමාර්ගයක් යෝජනා කළ යුතුය.",
                criteria: [
                    { id: "t1_a3_c1", text: "හඳුනා ගත් ගැටලුවක් සඳහා උචිත විසඳුමක් යෝජනා කරයි.", max: 10, guide: "8-10: පවත්නා ගැටලුවක් හඳුනාගෙන, පිළියම් වන විසඳුමක් දීම, එම විසඳුම සිසුවාගේ අදහසක් වශයෙන් සරල ව තාර්කික ව පෙන්වා දීම.<br>4-7: පවත්නා ගැටලුවක් හඳුනාගෙන ඊට විසඳුමක් දීම, සිසුවාගේ අදහසක් වශයෙන් පෙන්වා දීම.<br>1-3: පවත්නා ගැටලුවක් හඳුනාගෙන ඊට උචිත විසඳුමක් යෝජනා කිරීම දුර්වල මට්ටමක පැවතීම." },
                    { id: "t1_a3_c2", text: "තොරතුරු සංවිධානාත්මකව පැහැදිලිව හා නිර්මාණාත්මකව ඉදිරිපත් කරයි.", max: 10, guide: "8-10: ඉදිරිපත් කරන තොරතුරුවල සංවිධානාත්මක බව, නිර්මාණශීලී බව, පැහැදිලි බව හා පැහැදිලි ව සන්නිවේදනය කිරීම ඉහළ මට්ටමක පැවතීම.<br>4-7: ඉදිරිපත් කරන තොරතුරුවල සංවිධානාත්මක බව, නිර්මාණශීලී බව, පැහැදිලි ව හා පැහැදිලි ව සන්නිවේදනය කිරීම සතුටුදායක මට්ටමක පැවතීම.<br>1-3: ඉදිරිපත් කරන තොරතුරුවල සංවිධානාත්මක බව, නිර්මාණශීලී බව, පැහැදිලි ව හා පැහැදිලි ව සන්නිවේදනය කිරීම දුර්වල මට්ටමක පැවතීම." }
                ]
            },
            {
                id: "t1_summative", name: "සම්පිණ්ඩිත ඇගයීම",
                instructions: "මොඩියුලය අවසානයේ ලබා දෙන ලිඛිත හෝ ප්‍රායෝගික පරීක්ෂණය.",
                criteria: [
                    { id: "t1_s1", text: "මොඩියුලය අවසානයේ ලබා දෙන ලිඛිත/ප්‍රායෝගික පරීක්ෂණය", max: 30, guide: "පරීක්ෂණයෙන් ලබාගත් ලකුණු 30න් ලබාගත් ලකුණු ප්‍රමාණය." }
                ]
            }
        ]
    },
    term2: {
        name: "2 වාරය: ව්‍යවසායකයෙකු වීමට පදනමක්",
        activities: [
            {
                id: "t2_a1", name: "ක්‍රියාකාරකම 01: ව්‍යවසායකත්වයට ප්‍රවිෂ්ට වෙමු (ක්‍රීඩාව)",
                instructions: "පියවර 1.2: කණ්ඩායම් ක්‍රීඩාවේ නිරත වෙමින් අවදානම් භාර ගැනීම සහ කණ්ඩායම් තුළ සහයෝගයෙන් කටයුතු කිරීම ඇගයීමට ලක් කෙරේ.",
                criteria: [
                    { id: "t2_a1_c1", text: "අවදානම් භාර ගැනීම", max: 10, guide: "8-10: අවදානම් නිවැරදි ව තක්සේරු කර භාර ගැනීම පිළිබඳ ව දැඩි අවධානයෙන් යුතුව ක්‍රීඩා කිරීම.<br>4-7: අවදානම් තක්සේරු කර භාර ගැනීම යහපත් මට්ටමක තිබීම.<br>1-3: අවදානම් තක්සේරු කර භාර ගැනීම යහපත් මට්ටමක නොතිබීම." },
                    { id: "t2_a1_c2", text: "කණ්ඩායම් තුළ සහ කණ්ඩායම් අතර දැක ගත හැකි විශේෂ ලක්ෂණ ප්‍රදර්ශනය කරයි.", max: 10, guide: "8-10: තම කණ්ඩායම් තුළ මෙන් ම සෙසු කණ්ඩායම් අතර මනා මිත්‍රශීලී සේවයක් පවත්වා ගැනීම සහ සාමූහික ව ජය පරාජය භුක්ති විඳීම ඉතා සතුටුදායක තත්ත්වයක පැවතීම.<br>4-7: තම කණ්ඩායම තුළ සහ සෙසු කණ්ඩායම් අතර මිත්‍රශීලීත්වයක් පවත්වා ගැනීම සහ ජය පරාජය සාමූහික ව භුක්ති විඳීම සතුටුදායක මට්ටමක පැවතීම.<br>1-3: තම කණ්ඩායම් තුළ පමණක් මිත්‍රශීලීත්වයක් පවත්වා ගැනීම සහ කණ්ඩායම් අතර එය යහපත් මට්ටමක නොතිබීම." }
                ]
            },
            {
                id: "t2_a2", name: "ක්‍රියාකාරකම 02: අපි නිර්මාණශීලී වෙමු",
                instructions: "පියවර 2.5: කණ්ඩායම් වශයෙන් නව නිර්මාණයක් සකස් කිරීම. අලුත් අදහස් ඉදිරිපත් කිරීම සහ සම්පත් නිර්මාණශීලීව භාවිත කිරීම ඇගයේ.",
                criteria: [
                    { id: "t2_a2_c1", text: "නව අදහස් ඉදිරිපත් කිරීම", max: 10, guide: "8-10: අතිශය අලුත් සහ ප්‍රායෝගික අදහස් යොදා ගනිමින් නව නිර්මාණයක් ඉදිරිපත් කරයි.<br>4-7: පවතින සාමාන්‍ය තත්ත්වයට යම් වෙනස්කම් සහිත ව නිර්මාණයක් ඉදිරිපත් කරයි.<br>1-3: පවතින සාමාන්‍ය අදහසක් ම යොදා ගනිමින් නිර්මාණයක් ඉදිරිපත් කරයි." },
                    { id: "t2_a2_c2", text: "සම්පත් භාවිතය සහ නිර්මාණයක් ඉදිරිපත් කිරීම.", max: 10, guide: "8-10: පවතින සම්පත් උපරිම ලෙසත් නිර්මාණශීලී ලෙසත් භාවිත කරමින් ආකර්ෂණීය නිර්මාණයක් ඉදිරිපත් කරයි.<br>4-7: පවතින සීමිත සම්පත් ප්‍රමාණවත් ලෙස භාවිත කරමින් නිර්මාණයක් සකසයි.<br>1-3: උපදෙස් මත පමණක් නිර්මාණයක් කරයි. සම්පත් අපතේ ගොස් ඇති බව නිරීක්ෂණය කරයි." }
                ]
            },
            {
                id: "t2_a3", name: "ක්‍රියාකාරකම 03: අපි අමුතු ම ප්‍රදර්ශනයක් පවත්වමු",
                instructions: "පියවර 3.2: පාසල තුළ නිර්මාණශීලී ප්‍රදර්ශනයක් පැවැත්වීම. ප්‍රේක්ෂක ආකර්ෂණය දිනා ගැනීම සහ පරිසර හිතකාමී ව කටයුතු කිරීම ඇගයේ.",
                criteria: [
                    { id: "t2_a3_c1", text: "ප්‍රදර්ශනය සඳහා නිර්මාණශීලී භාණ්ඩ ඉදිරිපත් කිරීම", max: 10, guide: "8-10: ප්‍රේක්ෂකයන්ගේ ආකර්ෂණය හා පැසසුම් ලබා ගැනීම ඉතා උසස් මට්ටමක තිබීම.<br>4-7: ප්‍රේක්ෂකයන්ගේ ආකර්ෂණය හා පැසසුම් ලබා ගැනීම සතුටුදායක මට්ටමක තිබීම.<br>1-3: ප්‍රේක්ෂකයන්ගේ ආකර්ෂණය හා පැසසුම් ලබා ගැනීම සාමාන්‍ය මට්ටමක පැවතීම." },
                    { id: "t2_a3_c2", text: "පරිසර හිතකාමී ව ප්‍රදර්ශනයක් පැවැත්වීම", max: 10, guide: "8-10: ප්‍රදර්ශනය පැවැත්වීමෙන් පසු අදාළ ස්ථානය පිරිසිදු කිරීම සහ කසළ මනා ලෙස කළමනාකරණය කිරීම ඉතා හොඳ මට්ටමක පවතියි.<br>4-7: ප්‍රදර්ශනය පැවැත්වීමෙන් පසු අදාළ ස්ථානය පිරිසිදු කිරීම සහ කසළ කළමනාකරණය කිරීම සතුටුදායක මට්ටමක පවතියි.<br>1-3: ප්‍රදර්ශනය පැවැත්වීමෙන් පසු අදාළ ස්ථානය පිරිසිදු කිරීම සහ කසළ කළමනාකරණය කිරීම සාමාන්‍ය මට්ටමක පවතියි." }
                ]
            },
            {
                id: "t2_summative", name: "සම්පිණ්ඩිත ඇගයීම",
                instructions: "වාරය අවසානයේ ලබා දෙන පරීක්ෂණය.",
                criteria: [
                    { id: "t2_s1", text: "වාර අවසාන පරීක්ෂණය", max: 30, guide: "පරීක්ෂණයෙන් ලබාගත් ලකුණු 30න් ලබාගත් ලකුණු ප්‍රමාණය." }
                ]
            }
        ]
    },
    term3: {
        name: "3 වාරය: පිළිවෙළින් පිරි අනාගතයක්",
        activities: [
            {
                id: "t3_a1", name: "ක්‍රියාකාරකම 01: මුදලේ වතගොත",
                instructions: "පියවර 1.3: මුදලේ අතීත විකාශනය සහ අනාගතයේ මුදල් කෙබඳු විය යුතුද යන්න දැක්වෙන ආකර්ෂණීය නිර්මාණයක් ඉදිරිපත් කළ යුතුය.",
                criteria: [
                    { id: "t3_a1_c1", text: "මුදලේ අතීත විකාශනය හා අනාගතයේ මුදල් කෙබඳු ආකාරයට නිර්මාණය විය යුතු දැයි දැක්වීම.", max: 20, guide: "15-20: මුදලේ විකාශනය පිළිබඳ හා අනාගතයේ මුදල් කෙබඳු ආකාරයට නිර්මාණය විය යුතු දැයි දක්වීමට ආකර්ෂණීය නිර්මාණයක් ඉදිරිපත් කරයි.<br>7-14: අනාගතයේ මුදල් කෙබඳු ආකාරයට නිර්මාණය විය යුතු දැයි දක්වීමට නිර්මාණයක් ඉදිරිපත් කරයි.<br>1-6: මුදලේ විකාශනය පිළිබඳ සාමාන්‍ය අදහස් දැක්වෙන පරිදි නිර්මාණයක් ඉදිරිපත් කරයි." }
                ]
            },
            {
                id: "t3_a2", name: "ක්‍රියාකාරකම 2A: කාසි හා නෝට්ටු පිරිසිදුව හා පිළිවෙළට  භාවිත කරමු",
                instructions: "පියවර 2.4 A: කාසි හා නෝට්ටු පසුම්බියක බහා තබා ගැනීමේ වාසි හඳුනා ගැනීම.",
                criteria: [
                    { id: "t3_a2a_c1", text: "ඔබ හඳුනා ගත් පුද්ගලයා කාසි හෝ නෝට්ටු ලොග තබා ගන්නා ආකාරය සහ රැගෙන යන ආකාරය නිසා සිදු වන වාසි දැක්වීම.", max: 10, guide: "ඉතා හොඳයි (ලකුණු 10-08): අදාළ පුද්ගලයාට සිදු වන වාසි 3ක් සහ අන් අයට සිදු වන වාසිය 2ක් ඉතා පැහැදිලි ව දෙපෙන්වා දෙයි.<br>හොඳයි (ලකුණු 07-04): අදාළ පුද්ගලයාට සිදු වන වාසි 2ක් සහ අන් අයට සිදු වන වාසියක් පැහැදිලි ව දක්වයි.<br>සංවර්ධනය විය යුතුයි (ලකුණු 03-01): අදාළ පුද්ගලයාට සිදු වන වාසියක් හෝ අන් අයට සිදු වන වාසියක් පමණක් පැහැදිලි ව දක්වයි." },
                    { id: "t3_a2a_c2", text: "කාසි හා නෝට්ටු ලොග තබා ගන්නා ආකාරය සහ රැගෙන යන ආකාරය පිළිබඳ ව යහපත් ආකල්ප තවත් පුද්ගලයෙකු තුළ ඇති කිරීමට අපේක්ෂා කරන ආකාරය දැක්වීම.", max: 10, guide: "ඉතා හොඳයි (ලකුණු 10-08): කාසි හා නෝට්ටු ලොග තබා ගන්නා ආකාරය සහ රැගෙන යන ආකාරය පිළිබඳ ව යහපත් ආකල්ප ඇති කිරීමට අපේක්ෂා කරන ආකාරය පැහැදිලි කරුණු 3කින් වත් දක්වයි.<br>හොඳයි (ලකුණු 07-04): කාසි හා නෝට්ටු ලොග තබා ගන්නා ආකාරය සහ රැගෙන යන ආකාරය පිළිබඳ ව යහපත් ආකල්ප ඇති කිරීමට අපේක්ෂා කරන ආකාරය පැහැදිලි කරුණු 2කින් වත් දක්වයි.<br>සංවර්ධනය විය යුතුයි (ලකුණු 03-01): කාසි හා නෝට්ටු ලොග තබා ගන්නා ආකාරය සහ රැගෙන යන ආකාරය පිළිබඳ ව යහපත් ආකල්ප ඇති කිරීමට අපේක්ෂා කරන ආකාරය පැහැදිලි කරුණු 1කින් පමණක් දක්වයි." }
                ]
            },
            {
                id: "t3_a2b", name: "ක්‍රියාකාරකම 2B: කාසි හා නෝට්ටු පිරිසිදුව හා පිළිවෙළට භාවිත කරමු",
                instructions: "පියවර 2.4 B: කාසි හා නෝට්ටු ලොග තබා නොගැනීම නිසා මුහුණ දෙන ගැටලු හඳුනා ගැනීම.",
                criteria: [
                    { id: "t3_a2b_c1", text: "ඔබ තෝරා ගත් පුද්ගලයා කාසි හා නෝට්ටු නාවිත කිරීමේ දී දැනට පසුම්බියක් හෝ බෑගයක් නාවිත නොකිරීම නිසා මුහුණ දෙන ගැටලු පෙන්වා දීම.", max: 10, guide: "ඉතා හොඳයි (ලකුණු 10-08): අදාළ පුද්ගලයා මුහුණ දෙන ගැටලු 3ක් සහ අන් අය මුහුණ දෙන ගැටලුවක් ඉතා පැහැදිලි ව පෙන්වා දීම.<br>හොඳයි (ලකුණු 07-04): අදාළ පුද්ගලයා මුහුණ දෙන ගැටලු 2ක් සහ අන් අය මුහුණ දෙන ගැටලුවක් පැහැදිලි ව දැක්වීම.<br>සංවර්ධනය විය යුතුයි (ලකුණු 03-01): අදාළ පුද්ගලයා මුහුණ දෙන ගැටලුවක් හෝ අන් අය මුහුණ දෙන ගැටලුවක් පමණක් පැහැදිලි ව දැක්වීම." },
                    { id: "t3_a2b_c2", text: "කාසි හා නෝට්ටු නාවිත කිරීමේ දී පසුම්බියක් හෝ බෑගයක් භාවිත කිරීමේ යහපත් පුරුද්ද ජීවිත පුරුද්දක් බවට පත්කිරීම සඳහා එහි වාසි පෙන්වා දීම.", max: 10, guide: "ඉතා හොඳයි (ලකුණු 10-08): අදාළ පුද්ගලයාට සහ අන් අයට සිදු වන වාසි 4ක් පෙන්වා දෙමින් කාසි හා නෝට්ටු පරිහරණය කිරීමේ දී පසුම්බියක් හෝ බෑගයක් භාවිත කිරීම ජීවන පුරුද්දක් බවට පත් කළ හැකි ආකාරය නාර්ථික ව හා පැහැදිලි ව පෙන්වා දීම.<br>හොඳයි (ලකුණු 07-04): අදාළ පුද්ගලයාට සහ අන් අයට සිදු වන වාසි 3ක් පෙන්වා දෙමින් කාසි හා නෝට්ටු පරිහරණය කිරීමේ දී පසුම්බියක් හෝ බෑගයක් භාවිත කිරීම ජීවන පුරුද්දක් බවට පත් කළ හැකි ආකාරය පැහැදිලි ව පෙන්වා දීම.<br>සංවර්ධනය විය යුතුයි (ලකුණු 03-01): අදාළ පුද්ගලයාට හෝ අන් අයට සිදු වන වාසියක් පෙන්වා දෙමින් කාසි හා නෝට්ටු පරිහරණය කිරීමේ දී පසුම්බියක් හෝ බෑගයක් භාවිත කිරීම ජීවන පුරුද්දක් බවට පත් කළ හැකි ආකාරය පෙන්වා දීමට උත්සාහ කිරීම." }
                ]
            },
            {
                id: "t3_a3", name: "ක්‍රියාකාරකම 03: අපි ඉතිරි කරමු",
                instructions: "පියවර 3.3: පවුලේ මාසික ආදායම සාධාරණව වැඩි කර ගැනීම සහ ඉතිරි කිරීම් තවත් ආදායමක් ඉපැයීමට භාවිත කළ හැකි ආකාරය ඉදිරිපත් කිරීම.",
                criteria: [
                    { id: "t3_a3_c1", text: "පවුලේ මාසික ආදායම සාධාරණ ව සහ යහපත් ආකාරයට වැඩි කර ගත හැකි ආකාරය දැක්වීම", max: 10, guide: "8-10: තාර්කික ව සහ පැහැදිලි ව තම පවුලේ ආදායම සාධාරණ ව හා යහපත් ව වැඩි කර ගත හැකි ආකාරය පෙන්වා දීම.<br>4-7: තම පවුලේ ආදායම සාධාරණ ව සහ යහපත් ව වැඩි කර ගත හැකි ආකාරය පැහැදිලි ව දැක්වීම.<br>1-3: තම පවුලේ ආදායම වැඩි කර ගත හැකි ආකාරය දැක්වීමට විවිධ ක්‍රමවේද කිහිපයක් දැක්වීම." },
                    { id: "t3_a3_c2", text: "තවත් ආදායමක් ඉපැයිය හැකි ආකාරයට පවුලේ ඉතිරි කිරීම් භාවිත කළ හැකි ආකාරය දක්වීම", max: 10, guide: "8-10: පවුලේ ඉතිරි කිරීම් තුළින් තවත් ආදායම් ඉපැයිය හැකි විධිමත් මාර්ගයක් ඉතා පැහැදිලි ව හා තාර්කිකව පෙන්වා දීම.<br>4-7: පවුලේ ඉතිරි කිරීම් තුළින් තවත් ආදායම් ඉපැයිය හැකි විධිමත් මාර්ගයක් දැක්වීම.<br>1-3: පවුලේ ඉතිරි කිරීම් රැස් කර තබා ගත හැකි ආකාරයක් පමණක් දැක්වීම." }
                ]
            },
            {
                id: "t3_summative", name: "සම්පිණ්ඩිත ඇගයීම",
                instructions: "වාරය අවසානයේ ලබා දෙන පරීක්ෂණය.",
                criteria: [
                    { id: "t3_s1", text: "වාර අවසාන පරීක්ෂණය", max: 30, guide: "පරීක්ෂණයෙන් ලබාගත් ලකුණු 30න් ලබාගත් ලකුණු ප්‍රමාණය." }
                ]
            }
        ]
    }
};

// ==========================================
// 2. STATE & HELPERS
// ==========================================
const KEY = 'nie_grade6_data_v2';
const DB_NAME = 'nie_grade6_db', DB_STORE = 'appdata', DB_VER = 1;
const $ = id => document.getElementById(id);
const ic = n => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const TERMS = ['term1', 'term2', 'term3'];

const LEVELS = [
    [85, 'විශිෂ්ටයි', 'grade-A'],
    [70, 'ඉහළ සාධනයක් දක්වයි', 'grade-B'],
    [55, 'සතුටුදායකයි', 'grade-C'],
    [40, 'මූලික සාධනයක් දක්වයි', 'grade-S'],
    [0, 'සංවර්ධනය විය යුතුයි', 'grade-W']
];
const getLevel = m => LEVELS.find(l => m >= l[0]);

let appData = { students: [], marks: {}, groups: [], classes: ['6A', '6B', '6C', '6D'] };
let currentTerm = 'term1';
let currentAct = null;
let dashTerm = 'term1';
let isDashEditMode = false;

// ==========================================
// 3. IndexedDB (internal storage)
// ==========================================
let dbPromise = null;
function openDB() {
    if (!dbPromise) dbPromise = new Promise((res, rej) => {
        const r = indexedDB.open(DB_NAME, DB_VER);
        r.onupgradeneeded = () => {
            if (!r.result.objectStoreNames.contains(DB_STORE)) {
                r.result.createObjectStore(DB_STORE);
            }
        };
        r.onsuccess = () => res(r.result);
        r.onerror = () => rej(r.error);
    });
    return dbPromise;
}
async function dbGet() {
    const db = await openDB();
    return new Promise((res, rej) => {
        const t = db.transaction(DB_STORE, 'readonly').objectStore(DB_STORE).get('data');
        t.onsuccess = () => res(t.result || null);
        t.onerror = () => rej(t.error);
    });
}
async function dbSet(obj) {
    const db = await openDB();
    return new Promise((res, rej) => {
        const t = db.transaction(DB_STORE, 'readwrite').objectStore(DB_STORE).put(obj, 'data');
        t.onsuccess = () => res();
        t.onerror = () => rej(t.error);
    });
}
async function dbClear() {
    const db = await openDB();
    return new Promise((res, rej) => {
        const t = db.transaction(DB_STORE, 'readwrite').objectStore(DB_STORE).delete('data');
        t.onsuccess = () => res();
        t.onerror = () => rej(t.error);
    });
}

// ==========================================
// 4. INIT / SAVE
// ==========================================
async function init() {
    try {
        let s = null;
        try { s = await dbGet(); } catch (e) { /* IndexedDB unavailable */ }
        if (!s) {
            const ls = localStorage.getItem(KEY);
            if (ls) {
                s = JSON.parse(ls);
            } else {
                const old = localStorage.getItem('nie_grade6_data_v1');
                if (old) {
                    s = JSON.parse(old);
                    appData = Object.assign(appData, s);
                    migrate();
                    s = appData;
                }
            }
            if (s) await dbSet(s);
        }
        if (s) appData = Object.assign(appData, s);
    } catch (e) {
        alert('සුරැකි දත්ත කියවීමට නොහැකි විය.');
    }
    appData.groups ||= [];
    appData.classes ||= ['6A', '6B', '6C', '6D'];
    refreshClassDropdowns();
    switchTab('students');
    renderStudentList();
    renderGroups();
    updateStudentDropdowns();
}

function refreshClassDropdowns() {
    const classOptions = appData.classes.map(c => `<option value="${c}">${c}</option>`).join('');
    ['add-class', 'grp-class', 'mark-class', 'dash-class', 'promo-from-class', 'promo-to-class'].forEach(id => {
        const el = $(id);
        if (!el) return;
        const prevVal = el.value;
        el.innerHTML = classOptions;
        if (appData.classes.includes(prevVal)) el.value = prevVal;
    });
}

function addNewClass() {
    const inp = $('new-class-name');
    const name = inp.value.trim().toUpperCase();
    if (!name) return alert('පන්තියේ නමක් ඇතුළත් කරන්න.');
    if (appData.classes.includes(name)) return alert('මෙම පන්තිය දැනටමත් ඇත.');
    appData.classes.push(name);
    appData.classes.sort();
    saveData();
    refreshClassDropdowns();
    inp.value = '';
    showToast('නව පන්තිය එක් කරන ලදි!');
}

function promoteClass() {
    const fromClass = $('promo-from-class').value;
    const toClass = $('promo-to-class').value;
    if (!fromClass || !toClass) return alert('පන්ති දෙකම තෝරන්න.');
    if (fromClass === toClass) return alert('එකම පන්තියට මාරු කළ නොහැක.');
    const studentsToMove = appData.students.filter(s => s.class === fromClass);
    if (studentsToMove.length === 0) return alert(`${fromClass} පන්තියේ සිසුන් නොමැත.`);
    if (!confirm(`${fromClass} පන්තියේ සිසුන් ${studentsToMove.length} දෙනා ${toClass} පන්තියට මාරු කරන්නද?`)) return;
    studentsToMove.forEach(s => s.class = toClass);
    saveData();
    renderStudentList();
    renderGroups();
    updateStudentDropdowns();
    showToast(`${studentsToMove.length} දෙනෙක් මාරු කරන ලදි!`);
}

function migrate() {
    const f = m => {
        for (const k in m) if (/_s1$/.test(k)) m[k] = Math.min(30, Math.round(m[k] * 0.6));
    };
    Object.values(appData.marks).forEach(f);
    Object.values(appData.groupMarks || {}).forEach(f);
    Object.keys(appData.marks).forEach(sid => {
        const m = appData.marks[sid];
        for (const k in m) if (/_g[12]$/.test(k)) delete m[k];
    });
    saveData(true);
}

async function saveData(quiet) {
    try {
        await dbSet(appData);
        try { localStorage.setItem(KEY, JSON.stringify(appData)); } catch (e) {}
    } catch (e) {
        try { localStorage.setItem(KEY, JSON.stringify(appData)); }
        catch (e2) { return alert('දත්ත සුරැකීමට නොහැකි විය. උපස්ථයක් බාගන්න.'); }
    }
    if (!quiet) showToast();
}

function showToast(msg) {
    const t = $('toast');
    t.textContent = msg || 'සුරකින ලදි!';
    t.classList.add('show');
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.classList.remove('show'), 1800);
}

function switchTab(tabId) {
    document.querySelectorAll('.app-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.bottom-nav button').forEach(el => el.classList.remove('active'));
    const targetTab = $('tab-' + tabId);
    const targetNav = $('nav-' + tabId);
    if (targetTab) targetTab.classList.add('active');
    if (targetNav) targetNav.classList.add('active');
    if (tabId === 'marks') loadMarkingUI();
    if (tabId === 'dashboard') renderDashboard();
    window.scrollTo({ top: 0, behavior: 'instant' });
}

// ==========================================
// 5. STUDENTS
// ==========================================
const newId = () => 'stu_' + Date.now() + Math.random().toString(36).substr(2, 5);

function addStudent() {
    const inp = $('add-name'), name = inp.value.trim();
    if (!name) return alert('කරුණාකර නමක් ඇතුළත් කරන්න.');
    appData.students.push({ id: newId(), class: $('add-class').value, name });
    afterStudentChange();
    inp.value = '';
    inp.focus();
}

function addBulkStudents() {
    const inp = $('bulk-names');
    const names = inp.value.split(/[,\n]/).map(n => n.trim()).filter(Boolean);
    if (!names.length) return alert('නම් ඇතුළත් කරන්න.');
    names.forEach(name => appData.students.push({ id: newId(), class: $('add-class').value, name }));
    afterStudentChange();
    inp.value = '';
}

function renameStudent(id) {
    const s = appData.students.find(x => x.id === id);
    const n = s && prompt('නව නම:', s.name);
    if (n && n.trim()) {
        s.name = n.trim();
        afterStudentChange();
    }
}

function deleteStudent(id) {
    const s = appData.students.find(x => x.id === id);
    if (!s || !confirm(s.name + ' ඉවත් කර ඔහුගේ/ඇයගේ ලකුණු මකන්නද?')) return;
    appData.students = appData.students.filter(x => x.id !== id);
    delete appData.marks[id];
    appData.groups.forEach(g => g.members = g.members.filter(m => m !== id));
    afterStudentChange();
}

function afterStudentChange() {
    saveData();
    renderStudentList();
    renderGroups();
    updateStudentDropdowns();
}

function renderStudentList() {
    const box = $('student-list');
    if (!appData.students.length) {
        box.innerHTML = '<p class="empty">සිසුන් ඇතුළත් කර නැත. ඉහත නමක් ඇතුළත් කරන්න.</p>';
        return;
    }
    box.innerHTML = appData.classes.map(c => {
        const l = appData.students.filter(s => s.class === c);
        if (!l.length) return '';
        return `<div class="class-head">${c} පන්තිය (${l.length})</div>` + l.map(s =>
            `<div class="student-item"><span class="student-info">${esc(s.name)}</span><span class="row-btns">
            <button class="btn-ghost" onclick="renameStudent('${s.id}')" aria-label="නම වෙනස් කරන්න">${ic('edit')}</button>
            <button class="btn-danger" onclick="deleteStudent('${s.id}')" aria-label="ඉවත් කරන්න">${ic('x')}</button></span></div>`
        ).join('');
    }).join('');
}

// ==========================================
// 6. MARKS ENTRY (වාරය → ක්‍රියාකාරකම → සිසුවා/කණ්ඩායම)
// ==========================================
const actList = () => curriculum[currentTerm].activities;
const curAct = () => actList().find(a => a.id === currentAct) || actList()[0];
const grpOf = id => appData.groups.find(g => g.id === id);
const nameOf = id => (appData.students.find(s => s.id === id) || {}).name || '';

function curSel() {
    const sel = $('mark-student');
    if (!sel) return { v: '', g: null, ids: [] };
    const v = sel.value;
    const g = v.startsWith('g:') ? grpOf(v.slice(2)) : null;
    return { v, g, ids: g ? g.members : (v ? [v] : []) };
}

const actSum = (sid, a) => a.criteria.reduce((s, c) => s + Math.min(appData.marks[sid]?.[c.id] || 0, c.max), 0);
const actMax = a => a.criteria.reduce((s, c) => s + c.max, 0);
const actShort = (a, i) => a.id.includes('summative') ? 'සම්පිණ්ඩිත' : 'ක්‍රියා ' + (i + 1);

function renderTerms() {
    const lbl = { term1: '1 වාරය', term2: '2 වාරය', term3: '3 වාරය' };
    const box = $('term-chips');
    if (box) {
        box.innerHTML = TERMS.map(t =>
            `<button class="${t === currentTerm ? 'on' : ''}" onclick="setTerm('${t}')">${lbl[t]}</button>`
        ).join('');
    }
}

function setTerm(t) {
    const i = Math.max(0, actList().findIndex(a => a.id === currentAct));
    currentTerm = t;
    currentAct = actList()[i].id;
    loadMarkingUI();
}

function setAct(id) {
    currentAct = id;
    loadMarkingUI();
}

function renderActChips() {
    const box = $('act-chips');
    if (!box) return;
    const x = box.scrollLeft;
    const ref = curSel().ids[0];
    const cur = curAct();
    box.innerHTML = actList().map((a, i) =>
        `<button class="chip ${a === cur ? 'active' : ''}" onclick="setAct('${a.id}')">${actShort(a, i)}${ref ? `<small>${actSum(ref, a)}/${actMax(a)}</small>` : ''}</button>`
    ).join('');
    box.scrollLeft = x;
}

let allDropdownOptions = [];

function updateStudentDropdowns() {
    const sel = $('mark-student');
    const input = $('student-search-input');
    if (!sel || !input) return;
    
    const prev = sel.value;
    const c = $('mark-class').value;
    const gs = appData.groups.filter(g => g.class === c);
    const l = appData.students.filter(s => s.class === c);
    
    // Build array of all options
    allDropdownOptions = [];
    l.forEach(s => allDropdownOptions.push({ value: s.id, text: s.name, type: 'student' }));
    gs.forEach(g => allDropdownOptions.push({ value: 'g:' + g.id, text: g.name + ' (' + g.members.length + ')', type: 'group' }));

    // Reset search input
    input.value = '';
    
    // Set previous value if exists
    if (allDropdownOptions.some(o => o.value === prev)) {
        sel.value = prev;
        const prevOpt = allDropdownOptions.find(o => o.value === prev);
        input.value = prevOpt.text;
    } else {
        sel.value = '';
    }
    
    filterStudentDropdown();
    loadMarkingUI();
}

function toggleDropdown(show) {
    const drop = $('student-dropdown');
    if (!drop) return;
    if (show) {
        drop.classList.add('show');
        filterStudentDropdown();
    } else {
        drop.classList.remove('show');
    }
}

function filterStudentDropdown() {
    const input = $('student-search-input');
    const drop = $('student-dropdown');
    if (!input || !drop) return;
    
    const query = input.value.toLowerCase().trim();
    let filtered = allDropdownOptions;

    if (query) {
        // Filter by text
        filtered = allDropdownOptions.filter(o => o.text.toLowerCase().includes(query));
    }

    if (!filtered.length) {
        drop.innerHTML = '<div class="search-dropdown-item" style="cursor:default;color:#999;">කිසිවක් හමු නොවීය</div>';
        return;
    }

    let html = '';
    const students = filtered.filter(o => o.type === 'student');
    const groups = filtered.filter(o => o.type === 'group');

    if (students.length) {
        html += `<div class="search-dropdown-group">සිසුන්</div>`;
        html += students.map(o => `<div class="search-dropdown-item" onclick="selectDropdownItem('${o.value}', '${esc(o.text)}')">${esc(o.text)}</div>`).join('');
    }
    if (groups.length) {
        html += `<div class="search-dropdown-group">කණ්ඩායම්</div>`;
        html += groups.map(o => `<div class="search-dropdown-item" onclick="selectDropdownItem('${o.value}', '${esc(o.text)}')">${esc(o.text)}</div>`).join('');
    }
    
    drop.innerHTML = html;
}

function selectDropdownItem(value, text) {
    const sel = $('mark-student');
    const input = $('student-search-input');
    
    sel.value = value;
    input.value = text;
    toggleDropdown(false);
    loadMarkingUI(); // UI එක සෘජුවම යාවත්කාලීන කිරීම
}

// Hide dropdown when clicking outside
document.addEventListener('click', function(e) {
    const container = document.querySelector('.search-select-container');
    if (container && !container.contains(e.target)) {
        toggleDropdown(false);
    }
});

function stepStudent(d) {
    const sel = $('mark-student');
    const input = $('student-search-input');
    if (!allDropdownOptions.length) return;
    
    let currentIndex = allDropdownOptions.findIndex(o => o.value === sel.value);
    
    // සිසුවෙකු තෝරා නොමැති නම් පළමු අයගෙන් පටන් ගන්න
    if (currentIndex === -1) {
        currentIndex = d > 0 ? -1 : allDropdownOptions.length;
    }
    
    let nextIndex = currentIndex + d;
    
    if (nextIndex >= 0 && nextIndex < allDropdownOptions.length) {
        const nextOpt = allDropdownOptions[nextIndex];
        sel.value = nextOpt.value;
        input.value = nextOpt.text;
        loadMarkingUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
function loadMarkingUI() {
    renderTerms();
    const { v, g, ids } = curSel();
    const box = $('marking-area');
    const a = curAct();
    const ref = ids[0];
    if (!v) {
        $('act-chips').innerHTML = '';
        box.innerHTML = '<p class="empty">සිසුවෙකු තෝරන්න. "සිසුන්" පිටුවෙන් සිසුන් එක් කරන්න.</p>';
        return;
    }
    renderActChips();
    let h = g
        ? `<div class="card total-bar"><div class="tb-info"><h3>${ic('users')} ${esc(g.name)}</h3><div class="mem">${g.members.map(m => esc(nameOf(m))).join(' · ') || 'සාමාජිකයන් නැත'}</div><div class="hint">මෙහි දෙන ලකුණු සියලු සාමාජිකයන්ට යෙදේ.</div></div></div>`
        : `<div class="card total-bar"><div class="tb-info"><h3>${esc(nameOf(v))}</h3><div class="hint">${curriculum[currentTerm].name}</div><div id="live-level"></div></div><div class="score" id="live-total" style="--p:0"><b>0</b></div></div>`;
    if (!ids.length) {
        box.innerHTML = h;
        return;
    }
    h += `<div class="activity-group"><div class="activity-header">${a.name}</div>`;
    a.criteria.forEach(c => {
        const m = appData.marks[ref]?.[c.id] || 0;
        h += `<div class="criteria-item"><div class="criteria-text">${c.text}</div>
        <details class="guide-d"><summary>ලකුණු මාර්ගෝපදේශය</summary><div class="criteria-guide">${c.guide}</div></details>
        <div class="ctrl"><button class="step" onclick="bump('${c.id}',-1)" aria-label="අඩු කරන්න">−</button>
                <input id="r_${c.id}" type="range" min="0" max="${c.max}" value="${m}" style="--p:${m / c.max * 100}%" oninput="setMark('${c.id}', this.value)">
        <button class="step" onclick="bump('${c.id}',1)" aria-label="වැඩි කරන්න">+</button>
        <span class="mark-value" id="v_${c.id}">${m}/${c.max}</span></div></div>`;
    });
    box.innerHTML = h + '</div>';
    updateLive();
}

function bump(cid, d) {
    const el = $('r_' + cid);
    if (!el) return;
    let v = +el.value + d;
    v = Math.max(0, Math.min(+el.max, v));
    el.value = v;
    setMark(cid, v);
}

function setMark(cid, val) {
    val = parseInt(val) || 0;
    const el = $('r_' + cid);
    const max = +el.max;
    val = Math.max(0, Math.min(max, val));
    $('v_' + cid).textContent = val + '/' + max;
    el.style.setProperty('--p', (val / max * 100) + '%');
    curSel().ids.forEach(id => (appData.marks[id] ||= {})[cid] = val);
    saveData(true);
    renderActChips();
    updateLive();
}

function updateLive() {
    const { v, g } = curSel();
    const el = $('live-total');
    if (!el || g) return;
    const t = termTotal(v, currentTerm);
    const lv = getLevel(t);
    el.style.setProperty('--p', t); el.innerHTML = `<b>${t}</b>`;
    $('live-level').innerHTML = `<span class="lv">${lv[1]}</span>`;
}

// ==========================================
// 7. GROUPS
// ==========================================
const saveGroups = () => {
    saveData();
    renderGroups();
    updateStudentDropdowns();
};

function addGroup() {
    const c = $('grp-class').value;
    appData.groups.push({
        id: 'g' + Date.now(),
        class: c,
        name: 'කණ්ඩායම ' + (appData.groups.filter(g => g.class === c).length + 1),
        members: []
    });
    saveGroups();
}

function autoGroups() {
    const c = $('grp-class').value;
    const l = appData.students.filter(s => s.class === c);
    if (!l.length) return alert('මෙම පන්තියට සිසුන් නැත.');
    const k = parseInt(prompt('එක් කණ්ඩායමක සිසුන් ගණන:', '5'));
    if (!k || k < 1) return;
    if (appData.groups.some(g => g.class === c) && !confirm('දැනට ඇති කණ්ඩායම් ප්‍රතිස්ථාපනය කරන්නද?')) return;
    const ids = l.map(s => s.id);
    if (confirm('සිසුන් අහඹු ලෙස මිශ්‍ර කරන්නද? (OK = අහඹු, Cancel = නම් අනුපිළිවෙලින්)')) {
        ids.sort(() => Math.random() - .5);
    }
    appData.groups = appData.groups.filter(g => g.class !== c);
    for (let i = 0; i < ids.length; i += k) {
        appData.groups.push({
            id: 'g' + Date.now() + i,
            class: c,
            name: 'කණ්ඩායම ' + (i / k + 1),
            members: ids.slice(i, i + k)
        });
    }
    saveGroups();
}

function renameGroup(id) {
    const g = grpOf(id);
    const n = g && prompt('කණ්ඩායමේ නම:', g.name);
    if (n && n.trim()) {
        g.name = n.trim();
        saveGroups();
    }
}

function deleteGroup(id) {
    const g = grpOf(id);
    if (g && confirm(g.name + ' මකන්නද? (සිසුන් ඉවත් නොවේ)')) {
        appData.groups = appData.groups.filter(x => x.id !== id);
        saveGroups();
    }
}

function addMember(gid, sid) {
    if (!sid) return;
    appData.groups.forEach(g => g.members = g.members.filter(m => m !== sid));
    const g = grpOf(gid);
    if (g) g.members.push(sid);
    saveGroups();
}

function removeMember(gid, sid) {
    const g = grpOf(gid);
    if (!g) return;
    g.members = g.members.filter(m => m !== sid);
    saveGroups();
}

function renderGroups() {
    const c = $('grp-class').value;
    const gs = appData.groups.filter(g => g.class === c);
    const box = $('group-list');
    if (!gs.length) {
        box.innerHTML = '<p class="empty">කණ්ඩායම් නැත. "ස්වයංක්‍රීයව බෙදන්න" හෝ "කණ්ඩායමක්" භාවිත කරන්න.</p>';
        return;
    }
    const used = new Set(appData.groups.flatMap(g => g.members));
    const free = appData.students.filter(s => s.class === c && !used.has(s.id));
    box.innerHTML = `<div class="hint2">කණ්ඩායමක් නොමැති සිසුන්: ${free.length}</div>` + gs.map(g => `<div class="grp">
        <div class="grp-head"><b>${esc(g.name)}</b><span class="cnt">${g.members.length}</span><span class="row-btns">
        <button class="btn-ghost" onclick="renameGroup('${g.id}')" aria-label="නම වෙනස් කරන්න">${ic('edit')}</button>
        <button class="btn-danger" onclick="deleteGroup('${g.id}')" aria-label="මකන්න">${ic('trash')}</button></span></div>
        <div class="chips wrap">${g.members.map(m => `<button class="chip" onclick="removeMember('${g.id}','${m}')">${esc(nameOf(m))} ${ic('x')}</button>`).join('')}</div>
        ${free.length ? `<select onchange="addMember('${g.id}', this.value)"><option value="">+ සිසුවෙකු එක් කරන්න</option>${free.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select>` : ''}</div>`).join('');
}

// ==========================================
// 8. DASHBOARD
// ==========================================
function termTotal(sid, t) {
    const m = appData.marks[sid] || {};
    let actRaw = 0, actMaxSum = 0, sumRaw = 0, sumMax = 0;
    curriculum[t].activities.forEach(a => {
        const isSum = a.id.includes('summative');
        a.criteria.forEach(c => {
            const v = Math.min(m[c.id] || 0, c.max);
            if (isSum) { sumRaw += v; sumMax += c.max; }
            else { actRaw += v; actMaxSum += c.max; }
        });
    });
    const actPct = actMaxSum ? (actRaw / actMaxSum) * 50 : 0;
    const sumPct = sumMax ? (sumRaw / sumMax) * 50 : 0;
    return Math.round(actPct + sumPct);
}

const hasMarks = (sid, t) => curriculum[t].activities.some(a => a.criteria.some(c => appData.marks[sid]?.[c.id] !== undefined));

function statsOf(stu) {
    const ts = TERMS.map(t => hasMarks(stu.id, t) ? termTotal(stu.id, t) : null);
    const done = ts.filter(x => x !== null);
    return {
        ts,
        avg: done.length ? Math.round(done.reduce((a, b) => a + b, 0) / done.length) : null
    };
}

function classRows() {
    const c = $('dash-class').value;
    return appData.students.filter(s => s.class === c)
        .map(s => Object.assign({ stu: s }, statsOf(s)))
        .sort((a, b) => (b.avg ?? -1) - (a.avg ?? -1));
}

function setDashTerm(t) {
    dashTerm = t;
    renderDashboard();
}

function toggleDashEdit() {
    isDashEditMode = !isDashEditMode;
    const btn = $('dash-edit-btn');
    btn.textContent = isDashEditMode ? '✓ සුරකින්න' : 'සංශෝධනය';
    btn.classList.toggle('active', isDashEditMode);
    if (!isDashEditMode) saveData();
    renderDashboard();
}

function updateActivityFromDash(sid, actId, max, val) {
    let v = parseInt(val) || 0;
    if (v < 0) v = 0;
    if (v > max) v = max;
    const activity = curriculum[dashTerm].activities.find(a => a.id === actId);
    if (!activity) return;
    const totalCritMax = activity.criteria.reduce((s, c) => s + c.max, 0);
    let remaining = v;
    appData.marks[sid] ||= {};
    activity.criteria.forEach((c, i) => {
        const isLast = i === activity.criteria.length - 1;
        const share = isLast ? remaining : Math.round((c.max / totalCritMax) * v);
        const clamped = Math.min(share, c.max, remaining);
        appData.marks[sid][c.id] = clamped;
        remaining -= clamped;
    });
    saveData(true);
    if (event && event.target) event.target.value = v;
    renderDashboard();
}

function renderDashboard() {
    const lbl = { term1: '1 වාරය', term2: '2 වාරය', term3: '3 වාරය' };
    const chipsBox = $('dash-term-chips');
    if (chipsBox) {
        chipsBox.innerHTML = TERMS.map(t =>
            `<button class="${t === dashTerm ? 'on' : ''}" onclick="setDashTerm('${t}')">${lbl[t]}</button>`
        ).join('');
    }

    const rows = classRows();
    const tbody = $('dash-tbody'), thead = $('dash-thead'), sum = $('dash-summary');
    if (!rows.length) {
        tbody.innerHTML = '<tr><td colspan="10" class="empty">දත්ත නොමැත</td></tr>';
        thead.innerHTML = '';
        sum.innerHTML = '';
        return;
    }

    // Build dynamic headers based on term
    let thHtml = `<tr><th style="min-width:90px;text-align:left">නම</th>`;
    const currentActivities = curriculum[dashTerm].activities;
    currentActivities.forEach((a, i) => {
        const shortName = a.id.includes('summative') ? 'සම්පිණ්ඩිත' : `ක්‍රියා ${i + 1}`;
        const mx = actMax(a);
        thHtml += `<th title="${esc(a.name)}">${shortName}<br><small style="font-weight:normal;opacity:0.85">(ලකුණු ${mx})</small></th>`;
    });
    thHtml += `<th>වාරයේ මුළු<br><small style="font-weight:normal;opacity:0.85">(100න්)</small></th>
               <th>සාමාන්‍යය / මට්ටම</th></tr>`;
    thead.innerHTML = thHtml;

    // Build body
    tbody.innerHTML = rows.map(r => {
        const lv = r.avg === null ? null : getLevel(r.avg);
        const termScore = r.ts[TERMS.indexOf(dashTerm)];
        let tdHtml = `<td style="text-align:left;font-weight:700">${esc(r.stu.name)}</td>`;
        currentActivities.forEach(a => {
            let actScore = 0;
            a.criteria.forEach(c => {
                const m = appData.marks[r.stu.id]?.[c.id] || 0;
                actScore += Math.min(m, c.max);
            });
            if (isDashEditMode) {
                tdHtml += `<td style="padding:2px">
                    <input type="number" min="0" max="${actMax(a)}" value="${actScore}" 
                           onchange="updateActivityFromDash('${r.stu.id}', '${a.id}', ${actMax(a)}, this.value)"
                           title="${esc(a.name)}">
                </td>`;
            } else {
                tdHtml += `<td>${actScore}</td>`;
            }
        });
        tdHtml += `<td><b>${termScore ?? (isDashEditMode ? 0 : '-')}</b></td>`;
        tdHtml += `<td class="${lv ? lv[2] : ''}">${r.avg === null ? '-' : r.avg + ' · ' + lv[1]}</td></tr>`;
        return `<tr>${tdHtml}</tr>`;
    }).join('');

    // Summary stats
    const avgs = rows.map(r => r.avg).filter(x => x !== null);
    const stat = (v, l) => `<div class="stat"><b>${v}</b><span>${l}</span></div>`;
    sum.innerHTML = stat(rows.length, 'සිසුන්') + (avgs.length ?
        stat(Math.round(avgs.reduce((a, b) => a + b, 0) / avgs.length), 'පන්ති සාමාන්‍යය') +
        stat(Math.max(...avgs), 'ඉහළම') +
        stat(Math.min(...avgs), 'පහළම') : '') +
        LEVELS.map(l => `<div class="stat ${l[2]}"><b>${avgs.filter(a => getLevel(a) === l).length}</b><span>${l[1]}</span></div>`).join('');

    // Annual table
    const annualTbody = $('annual-tbody');
    if (annualTbody) {
        annualTbody.innerHTML = rows.map(r => {
            const lv = r.avg === null ? null : getLevel(r.avg);
            return `<tr>
                <td style="text-align:left;font-weight:700">${esc(r.stu.name)}</td>
                <td>${r.ts[0] ?? '-'}</td>
                <td>${r.ts[1] ?? '-'}</td>
                <td>${r.ts[2] ?? '-'}</td>
                <td class="${lv ? lv[2] : ''}" style="font-weight:700">
                    ${r.avg === null ? '-' : r.avg + ' · ' + lv[1]}
                </td>
            </tr>`;
        }).join('');
    }
}

// ==========================================
// 9. EXPORT / BACKUP
// ==========================================
function download(name, text, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
}

function exportToCSV() {
    const c = $('dash-class').value || 'Class';
    const rows = classRows();
    if (!rows.length) return alert('දත්ත නොමැත.');
    let csv = 'නම,පන්තිය,1 වාරය (100),2 වාරය (100),3 වාරය (100),සාමාන්‍යය,මට්ටම\n';
    rows.forEach(r => {
        csv += `"${r.stu.name.replace(/"/g, '""')}",${c},${r.ts.map(x => x ?? '').join(',')},${r.avg ?? ''},${r.avg === null ? '' : getLevel(r.avg)[1]}\n`;
    });
    download(`Grade6_Report_${c}.csv`, '\uFEFF' + csv, 'text/csv;charset=utf-8;');
}

function exportBackup() {
    download('grade6_backup_' + new Date().toISOString().slice(0, 10) + '.json',
        JSON.stringify(appData), 'application/json');
}

function importBackup(input) {
    const f = input.files[0];
    input.value = '';
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
        try {
            const d = JSON.parse(r.result);
            if (!Array.isArray(d.students) || typeof d.marks !== 'object') throw 0;
            if (!confirm('දැනට ඇති සියලු දත්ත මෙම උපස්ථයෙන් ප්‍රතිස්ථාපනය කරන්නද?')) return;
            appData = {
                students: d.students,
                marks: d.marks,
                groups: d.groups || [],
                classes: d.classes || ['6A', '6B', '6C', '6D']
            };
            saveData();
            refreshClassDropdowns();
            renderStudentList();
            renderGroups();
            updateStudentDropdowns();
            renderDashboard();
        } catch (e) {
            alert('අවලංගු උපස්ථ ගොනුවකි.');
        }
    };
    r.readAsText(f);
}

function resetAll() {
    if (confirm('සියලු සිසුන් සහ ලකුණු මැකෙනවා. ඉදිරියට යන්නද?') &&
        confirm('මෙය ආපසු හැරවිය නොහැක. උපස්ථයක් බාගත්තාද?')) {
        appData = { students: [], marks: {}, groups: [], classes: ['6A', '6B', '6C', '6D'] };
        refreshClassDropdowns();
        dbClear().catch(() => {});
        try { localStorage.removeItem(KEY); } catch (e) {}
        renderStudentList();
        renderGroups();
        updateStudentDropdowns();
        renderDashboard();
        showToast('සියලු දත්ත මකා දමන ලදි');
    }
}

// ==========================================
// 10. BOOT
// ==========================================
window.addEventListener('load', () => {
    init().catch(() => alert('ආරම්භ කිරීමේ දෝෂයක්.'));
});
