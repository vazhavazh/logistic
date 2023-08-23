import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LanguageSwitcher: React.FC<{
	onChange?: (locale: string) => unknown;
}> = ({ onChange }) => {
	const { i18n } = useTranslation();
	const { language: currentLanguage } = i18n;
	const router = useRouter();
	const locales = router.locales ?? [currentLanguage];

	const switchLanguage = (locale: string) => {
		if (onChange) {
			onChange(locale);
		}

		const path = router.asPath;
		router.push(path, path, { locale });
	};

	return (
		<select
			value={i18n.language}
			onChange={(e) => switchLanguage(e.target.value)}>
			{locales.map((locale) => {
				const label = locale.toUpperCase();

				return (
					<option
						key={locale}
						value={locale}>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default LanguageSwitcher;
