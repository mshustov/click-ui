import { SVGAttributes } from "react";

const Grafana = (props: SVGAttributes<SVGElement>) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M57.9444 28.8734C57.8447 27.9744 57.7446 26.8755 57.3451 25.6768C57.0453 24.4781 56.546 23.1795 55.8467 21.781C55.1474 20.3825 54.2485 18.984 53.1496 17.5855C52.7501 17.086 52.2505 16.4866 51.6512 15.9872C52.4503 12.7906 50.6524 10.0935 50.6524 10.0935C47.6555 9.89369 45.6576 10.9925 44.9582 11.5919C44.8585 11.5919 44.7585 11.492 44.5587 11.3921C44.0594 11.1923 43.5598 10.9925 42.9605 10.7927C42.3612 10.5929 41.8617 10.4931 41.2623 10.2933C40.663 10.1934 40.0635 10.0935 39.5642 9.99358C39.4641 9.99358 39.3644 9.99358 39.2644 9.99358C37.9657 5.79808 34.1698 4 34.1698 4C29.9744 6.69712 29.1752 10.3932 29.1752 10.3932C29.1752 10.3932 29.1752 10.4931 29.1752 10.5929C28.9754 10.6928 28.6757 10.6928 28.476 10.7927C28.1763 10.8926 27.8766 10.9925 27.477 11.0924C27.1773 11.1923 26.8777 11.2922 26.4781 11.492C25.8787 11.7917 25.1795 12.0913 24.5801 12.391C23.9808 12.6907 23.3814 13.0903 22.7821 13.4899C22.6822 13.4899 22.6822 13.3899 22.6822 13.3899C16.7885 11.1923 11.594 13.8894 11.594 13.8894C11.0946 20.0828 13.8916 24.0785 14.4909 24.7778C14.391 25.1773 14.1912 25.5769 14.0914 25.9765C13.6918 27.375 13.2922 28.8734 13.0924 30.3719C13.0924 30.5716 12.9925 30.7714 12.9925 30.9712C7.59829 33.6682 6 39.1623 6 39.1623C10.4952 44.3569 15.7895 44.6564 15.7895 44.6564C16.4888 45.8553 17.188 46.9539 18.0871 48.0528C18.4866 48.4523 18.8862 48.9519 19.1859 49.3514C17.5876 54.0465 19.3857 57.9424 19.3857 57.9424C24.3803 58.1422 27.6768 55.7446 28.3761 55.1453C28.8755 55.3451 29.375 55.4449 29.8745 55.6449C31.3728 56.0444 32.9712 56.2442 34.5694 56.344C34.9689 56.344 35.3687 56.344 35.7682 56.344H35.968H36.0678H36.2676H36.4673C38.8648 59.7403 42.9605 60.2399 42.9605 60.2399C45.9574 57.143 46.0571 54.0465 46.0571 53.3471C46.0571 53.2474 46.0571 53.2474 46.0571 53.2474V53.1474C46.6564 52.7478 47.2557 52.2485 47.8553 51.749C49.0539 50.6501 50.0528 49.4515 50.9519 48.1528C51.0519 48.0528 51.1517 47.953 51.1517 47.7533C54.548 47.953 56.8455 45.6555 56.8455 45.6555C56.2462 42.1592 54.2483 40.461 53.8487 40.1614C53.8487 40.1614 53.8487 40.1614 53.749 40.1614C53.749 39.9614 53.749 39.7616 53.749 39.5619C53.749 39.1623 53.749 38.7628 53.749 38.4633V37.9637V37.8637V37.7639C53.749 37.6639 53.749 37.6639 53.749 37.6639V37.4641V37.1646C53.749 37.0646 53.749 36.9648 53.749 36.8648C53.749 36.7651 53.749 36.6651 53.749 36.565V36.2655V35.9657C53.6489 35.5662 53.6489 35.1666 53.5492 34.8669C53.1496 33.3687 52.6501 31.97 51.851 30.6714C51.0519 29.3729 50.1528 28.274 49.0539 27.2751C47.9551 26.2762 46.7564 25.5769 45.4578 24.9776C44.1592 24.3782 42.8605 24.0785 41.4621 23.8787C40.7628 23.7788 40.1635 23.7788 39.4641 23.7788H39.2644H39.1646H39.0646H38.9648H38.7651C38.6651 23.7788 38.5651 23.7788 38.4653 23.7788C38.1655 23.7788 37.766 23.8787 37.4664 23.8787C36.1678 24.0785 34.8691 24.578 33.7703 25.2772C32.6714 25.9765 31.6726 26.7756 30.8734 27.6747C30.0743 28.5737 29.4749 29.6725 29.0753 30.7714C28.6757 31.8703 28.476 32.9689 28.3761 34.0678C28.3761 34.3676 28.3761 34.5673 28.3761 34.8669C28.3761 34.9669 28.3761 34.9669 28.3761 35.0669V35.2667C28.3761 35.3664 28.3761 35.5662 28.3761 35.6662C28.476 36.1655 28.5759 36.7651 28.6757 37.2644C28.9754 38.2632 29.4749 39.1623 29.9744 39.9614C30.5737 40.7608 31.273 41.3601 31.9723 41.8594C32.6714 42.3589 33.4708 42.7585 34.2698 42.9582C35.0689 43.158 35.7682 43.258 36.5673 43.258C36.6671 43.258 36.7671 43.258 36.8669 43.258H36.9669H37.0669C37.1667 43.258 37.2667 43.258 37.2667 43.258C37.2667 43.258 37.2667 43.258 37.3664 43.258H37.4664H37.5662C37.6662 43.258 37.766 43.258 37.866 43.258C37.9657 43.258 38.0658 43.258 38.1655 43.158C38.3653 43.158 38.4653 43.0583 38.6651 43.0583C38.9649 42.9582 39.2644 42.8585 39.5642 42.6587C39.8637 42.5587 40.0635 42.3589 40.3633 42.1592C40.463 42.1592 40.4633 42.0594 40.563 41.9594C40.8628 41.7596 40.8628 41.3601 40.663 41.1603C40.4633 40.9605 40.1635 40.8605 39.9637 41.0603C39.8637 41.0603 39.8637 41.1603 39.7639 41.1603C39.5642 41.2601 39.3644 41.3601 39.0646 41.4598C38.8648 41.5598 38.5651 41.5598 38.3653 41.6596C38.2655 41.6596 38.0658 41.6596 37.9657 41.6596C37.866 41.6596 37.866 41.6596 37.766 41.6596C37.6662 41.6596 37.6662 41.6596 37.5662 41.6596C37.4664 41.6596 37.4664 41.6596 37.3664 41.6596C37.2667 41.6596 37.1667 41.6596 37.1667 41.6596H37.0669H36.9669C36.8669 41.6596 36.8671 41.6596 36.7671 41.6596C36.1678 41.5598 35.6682 41.4598 35.0689 41.1603C34.4696 40.9605 33.9701 40.561 33.4705 40.1614C32.9712 39.7616 32.5717 39.1623 32.2719 38.663C31.9723 38.1635 31.6726 37.4641 31.5725 36.7651C31.4728 36.4653 31.4728 36.0657 31.4728 35.766C31.4728 35.6662 31.4728 35.5662 31.4728 35.4664V35.3664V35.2667C31.4728 35.0669 31.4728 34.8669 31.5725 34.6671C31.8723 33.1687 32.5716 31.7703 33.7703 30.5716C34.0701 30.2719 34.3696 30.0721 34.6694 29.7723C34.9689 29.5725 35.3687 29.3729 35.6682 29.1731C36.0678 28.9733 36.4673 28.8734 36.7671 28.7735C37.1667 28.6736 37.5662 28.5737 37.9657 28.5737C38.1655 28.5737 38.3653 28.5737 38.565 28.5737C38.6651 28.5737 38.6651 28.5737 38.6651 28.5737H38.8648H38.9648H39.1646C39.5642 28.5737 40.0635 28.6736 40.463 28.7735C41.3621 28.9733 42.1612 29.273 42.9605 29.7723C44.5587 30.6714 45.8573 32.0701 46.7564 33.6682C47.156 34.4673 47.4558 35.3664 47.6555 36.2655C47.6555 36.4653 47.7553 36.7651 47.7553 36.9648V37.1646V37.3644C47.7553 37.4641 47.7553 37.4641 47.7553 37.5642C47.7553 37.6639 47.7553 37.6639 47.7553 37.7639V37.9637V38.1635C47.7553 38.2632 47.7553 38.463 47.7553 38.563C47.7553 38.8628 47.7553 39.0626 47.6555 39.3621C47.6555 39.5619 47.5555 39.8617 47.5555 40.0614C47.5555 40.2612 47.4555 40.561 47.3558 40.7608C47.2557 41.2601 47.056 41.7596 46.8562 42.1592C46.4567 43.0583 45.9574 43.9574 45.3578 44.8562C44.1592 46.4546 42.561 47.853 40.663 48.6521C39.7639 49.0519 38.7651 49.3514 37.766 49.5512C37.2667 49.6512 36.7671 49.6512 36.2676 49.751H36.1678H36.0678H35.868H35.6682H35.5685C35.5685 49.751 35.6682 49.751 35.5685 49.751C35.2687 49.751 35.0689 49.751 34.7691 49.751C33.6705 49.6512 32.5716 49.4515 31.5725 49.1517C30.5737 48.8521 29.4749 48.4523 28.5759 47.953C26.6779 46.9539 24.9797 45.5555 23.5812 43.8573C22.8819 43.0583 22.2826 42.1592 21.883 41.1603C21.3835 40.1614 20.984 39.1623 20.6843 38.1635C20.3846 37.1646 20.1848 36.0657 20.1848 35.0669V34.8669V34.7671V34.5673V33.968V33.868V33.6682V33.5685C20.1848 33.4685 20.1848 33.2687 20.1848 33.1687C20.1848 32.6694 20.2847 32.0701 20.2847 31.5705C20.3846 31.0709 20.4845 30.4716 20.5844 29.9723C20.6843 29.4728 20.7842 28.8734 20.984 28.3739C21.2836 27.375 21.6832 26.3761 22.0828 25.3771C22.9818 23.4792 24.0806 21.781 25.4791 20.4824C25.7788 20.1827 26.1784 19.7831 26.578 19.4834C26.9776 19.1838 27.3772 18.8841 27.7767 18.6843C28.1763 18.3846 28.5758 18.1848 28.9754 17.985C29.1752 17.8851 29.375 17.7853 29.5748 17.6854C29.6747 17.6854 29.7746 17.5855 29.8745 17.5855C29.9743 17.5855 30.0743 17.4856 30.1742 17.4856C30.5737 17.2858 31.0732 17.1859 31.4728 16.9861C31.5725 16.9861 31.6726 16.8862 31.7726 16.8862C31.8723 16.8862 31.9723 16.7863 32.0721 16.7863C32.2719 16.6864 32.5716 16.6864 32.7714 16.5865C32.8712 16.5865 32.9712 16.4866 33.171 16.4866C33.2707 16.4866 33.3707 16.4866 33.5705 16.3868C33.6705 16.3868 33.7703 16.3868 33.9701 16.2869H34.1698H34.3696C34.4696 16.2869 34.5694 16.2869 34.7691 16.187C34.8692 16.187 35.0689 16.187 35.1689 16.0871C35.2687 16.0871 35.4685 16.0871 35.5685 16.0871C35.6682 16.0871 35.7682 16.0871 35.868 16.0871H36.0678H36.1678H36.2676C36.3676 16.0871 36.5673 16.0871 36.6671 16.0871H36.8669C36.8669 16.0871 36.9669 16.0871 36.8669 16.0871H36.9669C37.0669 16.0871 37.1667 16.0871 37.2667 16.0871C37.766 16.0871 38.1655 16.0871 38.6651 16.0871C39.5642 16.0871 40.463 16.187 41.3621 16.3868C43.0603 16.6864 44.6587 17.2858 46.1571 17.985C47.6555 18.6843 48.9539 19.5833 50.0528 20.5823C50.1528 20.6821 50.1528 20.6821 50.2526 20.7821C50.3526 20.8819 50.3526 20.8819 50.4523 20.9818C50.5524 21.0817 50.7521 21.1816 50.8519 21.3814C50.9519 21.5812 51.1517 21.5812 51.2517 21.781C51.3514 21.9808 51.5512 22.0807 51.6512 22.1806C52.1505 22.68 52.5501 23.1795 52.9499 23.7788C53.749 24.7778 54.4483 25.8766 54.9476 26.8755C54.9476 26.9754 55.0476 26.9754 55.0476 27.0753C55.0476 27.1752 55.1474 27.1752 55.1474 27.2751C55.2474 27.375 55.2474 27.4749 55.3471 27.6747C55.4471 27.7746 55.4471 27.8745 55.5469 28.0742C55.6469 28.1741 55.6469 28.274 55.7467 28.4738C55.9467 28.9733 56.1465 29.3729 56.2462 29.7723C56.446 30.4716 56.6458 31.0709 56.7458 31.5705C56.8455 31.7703 57.0453 31.97 57.2451 31.8703C57.4449 31.8703 57.6449 31.6705 57.6449 31.4705C58.0444 30.2719 58.0444 29.5725 57.9444 28.8734Z"
      fill="url(#paint0_linear_472_6171)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_472_6171"
        x1="32.1624"
        y1="75.4381"
        x2="32.1624"
        y2="10.3784"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF100" />
        <stop
          offset="1"
          stopColor="#F05A28"
        />
      </linearGradient>
    </defs>
  </svg>
);

export default Grafana;