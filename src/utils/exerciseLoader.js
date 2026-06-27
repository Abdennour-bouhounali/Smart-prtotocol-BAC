/**
 * Dynamically loads all exercise components from the /src/exercices folder.
 * Uses Vite's import.meta.glob.
 */
export const loadExercices = async () => {
    const exerciseModules = import.meta.glob('/src/exercices/*.jsx', { eager: true });
    const sectionModules = import.meta.glob('/src/sections/*.jsx', { eager: true });

    const sections = Object.entries(sectionModules).map(([path, module]) => {
        const name = path.split('/').pop().replace('.jsx', '');
        let displayName = name;
        if (name === 'TableOfContents') displayName = 'الفهرس';
        else if (name === 'Introduction') displayName = 'المقدمة';
        else if (name === 'Summary') displayName = 'مخطط بروتوكول SMART الشامل';
        else if (name === 'Methodology') displayName = 'منهجية الحل';
        else if (name === 'Solution_Methodology') displayName = 'حلول تطبيقات بروتوكول SMART';
        else if (name === 'BacIntelligence') displayName = 'ذكاء ترجمة البكالوريا';
        else if (name === 'TeacherSection') displayName = 'ملحق المعلمين';
        else if (name === 'DirectQuestions_Functions') displayName = 'أسئلة مباشرة: الدوال';
        else if (name === 'DirectQuestionsIntro') displayName = 'مقدمة الأسئلة المباشرة';
        else if (name === 'Solution_DirectQuestions_Functions') displayName = 'حلول أسئلة مباشرة: الدوال';
        else if (name === 'DirectQuestions_Sequences') displayName = 'أسئلة مباشرة: المتتاليات';
        else if (name === 'Solution_DirectQuestions_Sequences') displayName = 'حلول أسئلة مباشرة: المتتاليات';
        else if (name === 'DirectQuestions_ComplexNumbers') displayName = 'أسئلة مباشرة: الأعداد المركبة';
        else if (name === 'Solution_DirectQuestions_ComplexNumbers') displayName = 'حلول أسئلة مباشرة: الأعداد المركبة';
        else if (name === 'DirectQuestions_Integrals') displayName = 'أسئلة مباشرة: الدوال الأصلية';
        else if (name === 'Solution_DirectQuestions_Integrals') displayName = 'حلول أسئلة مباشرة: الدوال الأصلية';
        else if (name === 'Exercice1') displayName = 'التمرين 1';
        else if (name === 'Exercice4') displayName = 'التمرين 4';
        else if (name === 'Conclusion') displayName = 'الخاتمة';

        const orderMap = {
            'TableOfContents': 0,
            'Introduction': 1,
            'Summary': 2,
            'Methodology': 3,
            'Solution_Methodology': 4,
            'TeacherSection': 5,
            'BacIntelligence': 6,
            'DirectQuestionsIntro': 50,
            'DirectQuestions_Functions': 51,
            'Solution_DirectQuestions_Functions': 52,
            'DirectQuestions_Sequences': 53,
            'Solution_DirectQuestions_Sequences': 54,
            'DirectQuestions_ComplexNumbers': 55,
            'Solution_DirectQuestions_ComplexNumbers': 56,
            'DirectQuestions_Integrals': 57,
            'Solution_DirectQuestions_Integrals': 58,
            'Exercice1': 70,
            'Exercice4': 71,
            'Conclusion': 90
        };

        return {
            id: `section-${name}`,
            name: displayName,
            type: 'section',
            Component: module.default,
            order: orderMap[name] || 99
        };
    }).sort((a, b) => a.order - b.order);

    const exercices = Object.entries(exerciseModules).map(([path, module]) => {
        const name = path.split('/').pop().replace('.jsx', '');
        return {
            id: name,
            name: name,
            type: 'exercise',
            Component: module.default
        };
    });

    return { sections, exercices };
};
