import { ComponentPropsWithoutRef } from "react"
import { cx } from "class-variance-authority"

export default function TwitterButton({
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...rest}
      className={cx(
        "w-12 md:w-14 lg:w-16",
        "group rounded-full aspect-square flex items-center justify-center",
        "bg-[#1DA1F2] border-[#1DA1F2] border-2",
        "transition-colors hover:bg-white"
      )}
    >
      <Icon />
    </button>
  )
}

function Icon() {
  return (
    <svg
      className="w-6 md:w-7 lg:w-8 max-h-8 fill-white group-hover:fill-[#1DA1F2]"
      viewBox="0 0 21 19"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.2828 3.72713L17.5145 6.68591C16.9553 13.6148 11.4882 19 4.94519 19C3.60087 19 2.49263 18.7724 1.65103 18.3231C0.972387 17.96 0.694633 17.5711 0.625194 17.4602C0.563278 17.361 0.523146 17.2481 0.507797 17.1299C0.492448 17.0118 0.502279 16.8914 0.536555 16.7779C0.570831 16.6644 0.628666 16.5606 0.705739 16.4744C0.782812 16.3881 0.87713 16.3215 0.981645 16.2797C1.00572 16.2698 3.2259 15.3584 4.63596 13.6237C3.85398 12.9365 3.17134 12.1296 2.61021 11.229C1.46216 9.4072 0.177085 6.24259 0.573347 1.51349C0.585907 1.36322 0.63838 1.21991 0.724586 1.10045C0.810793 0.980986 0.927142 0.890338 1.05993 0.839181C1.19272 0.788024 1.33643 0.778488 1.47412 0.811696C1.61181 0.844904 1.73776 0.919473 1.83713 1.02662C1.86953 1.06126 4.91835 4.30206 8.6458 5.35298V4.75034C8.64439 4.1184 8.76128 3.49254 8.98961 2.90963C9.21794 2.32671 9.55309 1.79851 9.97532 1.35615C10.3854 0.918489 10.8733 0.573049 11.4103 0.340207C11.9473 0.107366 12.5225 -0.00815895 13.1019 0.000447855C13.8792 0.00864232 14.6413 0.231661 15.3141 0.647823C15.9869 1.06398 16.5475 1.65913 16.9414 2.37539H19.7587C19.9053 2.37527 20.0486 2.42163 20.1705 2.50861C20.2925 2.59559 20.3875 2.71927 20.4436 2.864C20.4997 3.00874 20.5144 3.16801 20.4857 3.32165C20.4571 3.4753 20.3865 3.61641 20.2828 3.72713Z" />
    </svg>
  )
}
