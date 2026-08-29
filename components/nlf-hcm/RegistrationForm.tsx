import type { NlfHcmRegistrationCopy } from "@/lib/i18n";
import styles from "./RegistrationForm.module.css";

export function RegistrationForm({ copy }: { copy: NlfHcmRegistrationCopy }) {
  return (
    <form className={styles.form}>
      <label>
        <span>{copy.nameLabel}</span>
        <input autoComplete="name" name="name" type="text" />
      </label>

      <label>
        <span>{copy.phoneLabel}</span>
        <input autoComplete="tel" name="phone" type="tel" />
      </label>

      <label>
        <span>{copy.emailLabel}</span>
        <input autoComplete="email" name="email" type="email" />
      </label>

      <label>
        <span>{copy.ageRangeLabel}</span>
        <select name="ageRange">
          <option value="" />
          {copy.ageRanges.map((ageRange) => (
            <option key={ageRange} value={ageRange}>
              {ageRange}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.full}>
        <span>{copy.reasonLabel}</span>
        <textarea name="reason" rows={4} />
      </label>

      <label className={styles.full}>
        <span>{copy.contactMethodLabel}</span>
        <select name="contactMethod">
          <option value="" />
          {copy.contactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </label>

      <div className={styles.actions}>
        <button type="submit">{copy.submit}</button>
        <p>{copy.note}</p>
      </div>
    </form>
  );
}
