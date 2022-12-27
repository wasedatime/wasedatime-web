/* eslint-disable no-nested-ternary */
import React from "react";

interface StyledTextProps {
  children: any;
  centered?: boolean;
  headerType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
}

export const StyledHeader = ({
  children,
  centered,
  headerType,
  id,
}: StyledTextProps) =>
  headerType === "h1" ? (
    <h1
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "text-center my-4"
      }`}
    >
      {children}
    </h1>
  ) : headerType === "h2" ? (
    <h2
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "text-center my-4"
      }`}
    >
      {children}
    </h2>
  ) : headerType === "h3" ? (
    <h3
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "text-center my-4"
      }`}
    >
      {children}
    </h3>
  ) : headerType === "h4" ? (
    <h4
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "text-center my-4"
      }`}
    >
      {children}
    </h4>
  ) : headerType === "h5" ? (
    <h5
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "text-center my-4"
      }`}
    >
      {children}
    </h5>
  ) : (
    <h6
      id={id}
      className={`text-light-text1 dark:text-dark-text1 ${
        centered && "text-center my-4"
      }`}
    >
      {children}
    </h6>
  );

export const StyledParagraph = ({
  children,
  centered,
  id,
}: StyledTextProps) => (
  <p
    id={id}
    className={`text-light-text2 dark:text-dark-text2 ${
      centered && "text-center my-4"
    }`}
  >
    {children}
  </p>
);

export const StyledBold = ({ children, centered, id }: StyledTextProps) => (
  <b
    id={id}
    className={`text-light-text1 dark:text-dark-text1 ${
      centered && "text-center my-4"
    }`}
  >
    {children}
  </b>
);

const PrivacyPolicy = () => (
  <div className="bg-light-bgMain dark:bg-dark-bgMain p-6 md:py-24 md:px-60">
    <StyledHeader headerType="h1" centered>
      PRIVACY NOTICE
    </StyledHeader>
    <StyledParagraph centered>Last updated January 13, 2021</StyledParagraph>
    <StyledParagraph>
      Thank you for choosing to be part of our community at WasedaTime ("we",
      "us", "our"). We are committed to protecting your personal information and
      your right to privacy. If you have any questions or concerns about this
      privacy notice, or our practices with regards to your personal
      information, please contact us at inquiry@wasedatime.com.
    </StyledParagraph>
    <StyledParagraph>
      When you visit our website https://wasedatime.com (the "Website"), and
      more generally, use any of our services (the "Services", which include the
      Website), we appreciate that you are trusting us with your personal
      information. We take your privacy very seriously. In this privacy notice,
      we seek to explain to you in the clearest way possible what information we
      collect, how we use it and what rights you have in relation to it. We hope
      you take some time to read through it carefully, as it is important. If
      there are any terms in this privacy notice that you do not agree with,
      please discontinue use of our Services immediately.
    </StyledParagraph>
    <StyledParagraph>
      This privacy notice applies to all information collected through our
      Services (which, as described above, includes our Website), as well as,
      any related services, sales, marketing or events.
    </StyledParagraph>
    <StyledBold>
      Please read this privacy notice carefully as it will help you understand
      what we do with the information that we collect.
    </StyledBold>
    <br />
    <StyledHeader headerType="h3" centered>
      1. WHAT INFORMATION DO WE COLLECT?
    </StyledHeader>
    <StyledHeader headerType="h4" centered>
      Personal information you disclose to us
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We collect personal information that
      you provide to us.
    </StyledParagraph>
    <StyledParagraph>
      We collect personal information that you voluntarily provide to us when
      you register on the Website, express an interest in obtaining information
      about us or our products and Services, when you participate in activities
      on the Website or otherwise when you contact us.
    </StyledParagraph>
    <StyledParagraph>
      The personal information that we collect depends on the context of your
      interactions with us and the Website, the choices you make and the
      products and features you use. The personal information we collect may
      include the following:
    </StyledParagraph>
    <StyledParagraph>
      <StyledBold>Personal Information Provided by You.</StyledBold> We collect
      email addresses; and other similar information.
    </StyledParagraph>
    <StyledParagraph>
      <StyledBold>Social Media Login Data.</StyledBold> We provide you with the
      option to register with us using your existing Google student account
      details. If you register in this way, we will collect the Information
      described in the section called{" "}
      <a href="#how_to_handle_social_logins">
        "HOW DO WE HANDLE YOUR SOCIAL LOGINS"
      </a>{" "}
      below.
    </StyledParagraph>
    <StyledParagraph>
      All personal information that you provide to us must be true, complete and
      accurate, and you must notify us of any changes to such personal
      information.
    </StyledParagraph>
    <StyledHeader headerType="h4" centered>
      Information automatically collected
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> Some information — such as your
      Internet Protocol (IP) address and/or browser and device characteristics —
      is collected automatically when you visit our Website.
    </StyledParagraph>
    <StyledParagraph>
      We automatically collect certain information when you visit, use or
      navigate the Website. This information does not reveal your specific
      identity (like your name or contact information) but may include device
      and usage information, such as your IP address, browser and device
      characteristics, operating system, language preferences, referring URLs,
      device name, country, location, information about how and when you use our
      Website and other technical information. This information is primarily
      needed to maintain the security and operation of our Website, and for our
      internal analytics and reporting purposes.
    </StyledParagraph>
    <StyledParagraph>The information we collect includes:</StyledParagraph>
    <ul className="text-light-text2 dark:text-dark-text2">
      <li>
        <i>Log and Usage Data.</i> Log and usage data is service-related,
        diagnostic, usage and performance information our servers automatically
        collect when you access or use our Website and which we record in log
        files. Depending on how you interact with us, this log data may include
        your IP address, device information, browser type and settings and
        information about your activity in the Website (such as the date/time
        stamps associated with your usage, pages and files viewed, searches and
        other actions you take such as which features you use), device event
        information (such as system activity, error reports (sometimes called
        'crash dumps') and hardware settings).
      </li>
      <li>
        <i>Device Data.</i> We collect device data such as information about
        your computer, phone, tablet or other device you use to access the
        Website. Depending on the device used, this device data may include
        information such as your IP address (or proxy server), device and
        application identification numbers, location, browser type, hardware
        model Internet service provider and/or mobile carrier, operating system
        and system configuration information.
      </li>
      <li>
        <i>Location Data.</i> We collect location data such as information about
        your device's location, which can be either precise or imprecise. How
        much information we collect depends on the type and settings of the
        device you use to access the Website. For example, we may use GPS and
        other technologies to collect geolocation data that tells us your
        current location (based on your IP address). You can opt out of allowing
        us to collect this information either by refusing access to the
        information or by disabling your Location setting on your device. Note
        however, if you choose to opt out, you may not be able to use certain
        aspects of the Services.
      </li>
    </ul>
    <StyledHeader headerType="h3" centered>
      2. HOW DO WE USE YOUR INFORMATION?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We process your information for
      purposes based on compliance with our legal obligations and/or your
      consent.
    </StyledParagraph>
    <StyledParagraph>
      We use personal information collected via our Website for a variety of
      service purposes described below. We process your personal information for
      these purposes with your consent and/or for compliance with our legal
      obligations. We indicate the specific processing grounds we rely on next
      to each purpose listed below.
    </StyledParagraph>
    <StyledParagraph>
      We use the information we collect or receive:
    </StyledParagraph>
    <ul className="text-light-text2 dark:text-dark-text2">
      <li>
        <StyledBold>
          To facilitate account creation and logon process.
        </StyledBold>{" "}
        If you choose to link your account with us to a third-party account
        (such as your Google account), we use the information you allowed us to
        collect from those third parties to facilitate account creation and
        logon process. See the section below headed{" "}
        <a href="#how_to_handle_social_logins">
          "HOW DO WE HANDLE YOUR SOCIAL LOGINS"
        </a>{" "}
        for further information.
      </li>
      <li>
        <StyledBold>To post testimonials.</StyledBold> We post testimonials on
        our Website that may contain personal information. Prior to posting a
        testimonial, we will obtain your consent to use your name and the
        content of the testimonial. If you wish to update, or delete your
        testimonial, please contact us at inquiry@wasedatime.com and be sure to
        include your name, testimonial location, and contact information.
      </li>
      <li>
        <StyledBold>Request feedback.</StyledBold> We may use your information
        to request feedback and to contact you about your use of our Website.
      </li>
      <li>
        <StyledBold>To enable user-to-user communications.</StyledBold> We may
        use your information in order to enable user-to-user communications with
        each user's consent.
      </li>
      <li>
        <StyledBold>To manage user accounts.</StyledBold> We may use your
        information for the purposes of managing our account and keeping it in
        working order.
      </li>
      <li>
        <StyledBold>To send administrative information to you.</StyledBold> We
        may use your personal information to send you product, service and new
        feature information and/or information about changes to our terms,
        conditions, and policies.
      </li>
      <li>
        <StyledBold>To protect our Services.</StyledBold> We may use your
        information as part of our efforts to keep our Website safe and secure
        (for example, for fraud monitoring and prevention).
      </li>
      <li>
        <StyledBold>
          To enforce our terms, conditions and policies or to comply with legal
          and regulatory requirements.
        </StyledBold>
      </li>
      <li>
        <StyledBold>To respond to legal requests and prevent harm.</StyledBold>{" "}
        If we receive a subpoena or other legal request, we may need to inspect
        the data we hold to determine how to respond.
      </li>
    </ul>
    <StyledHeader headerType="h3" centered>
      3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We only share information with your
      consent, to comply with laws, to provide you with services, to protect
      your rights, or to fulfill obligations.
    </StyledParagraph>
    <StyledParagraph>
      We may process or share your data that we hold based on the following
      legal basis:
    </StyledParagraph>
    <ul className="text-light-text2 dark:text-dark-text2">
      <li>
        <StyledBold>Consent:</StyledBold> We may process your data if you have
        given us specific consent to use your personal information for a
        specific purpose.
      </li>
      <li>
        <StyledBold>Legal Obligations:</StyledBold> We may disclose your
        information where we are legally required to do so in order to comply
        with applicable law, governmental requests, a judicial proceeding, court
        order, or legal process, such as in response to a court order or a
        subpoena (including in response to public authorities to meet national
        security or law enforcement requirements).
      </li>
      <li>
        <StyledBold>Vital Interests:</StyledBold> We may disclose your
        information where we believe it is necessary to investigate, prevent, or
        take action regarding potential violations of our policies, suspected
        fraud, situations involving potential threats to the safety of any
        person and illegal activities, or as evidence in litigation in which we
        are involved.
      </li>
    </ul>
    <StyledHeader headerType="h3" centered id="how_to_handle_social_logins">
      4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> If you choose to register or log in to
      our services using a social media account, we may have access to certain
      information about you.
    </StyledParagraph>
    <StyledParagraph>
      Our Website offers you the ability to register and login using your
      third-party social media account details (Google student account). Where
      you choose to do this, we will receive certain profile information about
      you from your social media provider. The profile Information we receive
      may vary depending on the social media provider concerned, but will often
      include your name, email address, friends list, profile picture as well as
      other information you choose to make public on such social media platform.
    </StyledParagraph>
    <StyledParagraph>
      We will use the information we receive only for the purposes that are
      described in this privacy notice or that are otherwise made clear to you
      on the relevant Website. Please note that we do not control, and are not
      responsible for, other uses of your personal information by your
      third-party social media provider. We recommend that you review their
      privacy notice to understand how they collect, use and share your personal
      information, and how you can set your privacy preferences on their sites
      and apps.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We may transfer, store, and process
      your information in countries other than your own.
    </StyledParagraph>
    <StyledParagraph>
      Our servers are located in. If you are accessing our Website from outside,
      please be aware that your information may be transferred to, stored, and
      processed by us in our facilities and by those third parties with whom we
      may share your personal information (see "WILL YOUR INFORMATION BE SHARED
      WITH ANYONE?" above), in and other countries.
    </StyledParagraph>
    <StyledParagraph>
      If you are a resident in the European Economic Area, then these countries
      may not necessarily have data protection laws or other similar laws as
      comprehensive as those in your country. We will however take all necessary
      measures to protect your personal information in accordance with this
      privacy notice and applicable law.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      6. HOW LONG DO WE KEEP YOUR INFORMATION?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We keep your information for as long as
      necessary to fulfill the purposes outlined in this privacy notice unless
      otherwise required by law.
    </StyledParagraph>
    <StyledParagraph>
      We will only keep your personal information for as long as it is necessary
      for the purposes set out in this privacy notice, unless a longer retention
      period is required or permitted by law (such as tax, accounting or other
      legal requirements). No purpose in this notice will require us keeping
      your personal information for longer than the period of time in which
      users have an account with us.
    </StyledParagraph>
    <StyledParagraph>
      When we have no ongoing legitimate need to process your personal
      information, we will either delete or anonymize such information, or, if
      this is not possible (for example, because your personal information has
      been stored in backup archives), then we will securely store your personal
      information and isolate it from any further processing until deletion is
      possible.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      7. HOW DO WE KEEP YOUR INFORMATION SAFE?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We aim to protect your personal
      information through a system of organizational and technical security
      measures.
    </StyledParagraph>
    <StyledParagraph>
      We have implemented appropriate technical and organizational security
      measures designed to protect the security of any personal information we
      process. However, despite our safeguards and efforts to secure your
      information, no electronic transmission over the Internet or information
      storage technology can be guaranteed to be 100% secure, so we cannot
      promise or guarantee that hackers, cybercriminals, or other unauthorized
      third parties will not be able to defeat our security, and improperly
      collect, access, steal, or modify your information. Although we will do
      our best to protect your personal information, transmission of personal
      information to and from our Website is at your own risk. You should only
      access the Website within a secure environment.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      8. DO WE COLLECT INFORMATION FROM MINORS?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> We do not knowingly collect data from
      or market to children under 18 years of age.
    </StyledParagraph>
    <StyledParagraph>
      We do not knowingly solicit data from or market to children under 18 years
      of age. By using the Website, you represent that you are at least 18 or
      that you are the parent or guardian of such a minor and consent to such
      minor dependent's use of the Website. If we learn that personal
      information from users less than 18 years of age has been collected, we
      will deactivate the account and take reasonable measures to promptly
      delete such data from our records. If you become aware of any data we may
      have collected from children under age 18, please contact us at
      inquiry@wasedatime.com.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      9. WHAT ARE YOUR PRIVACY RIGHTS?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> You may review, change, or terminate
      your account at any time.
    </StyledParagraph>
    <StyledParagraph>
      If you are a resident in the European Economic Area and you believe we are
      unlawfully processing your personal information, you also have the right
      to complain to your local data protection supervisory authority. You can
      find their contact details here:
      http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
    </StyledParagraph>
    <StyledParagraph>
      If you are a resident in Switzerland, the contact details for the data
      protection authorities are available here:
      https://www.edoeb.admin.ch/edoeb/en/home.html.
    </StyledParagraph>
    <StyledParagraph>
      If you have questions or comments about your privacy rights, you may email
      us at inquiry@wasedatime.com.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      10. CONTROLS FOR DO-NOT-TRACK FEATURES
    </StyledHeader>
    <StyledParagraph>
      Most web browsers and some mobile operating systems and mobile
      applications include a Do-Not-Track ("DNT") feature or setting you can
      activate to signal your privacy preference not to have data about your
      online browsing activities monitored and collected. At this stage no
      uniform technology standard for recognizing and implementing DNT signals
      has been finalized. As such, we do not currently respond to DNT browser
      signals or any other mechanism that automatically communicates your choice
      not to be tracked online. If a standard for online tracking is adopted
      that we must follow in the future, we will inform you about that practice
      in a revised version of this privacy notice.{" "}
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      11. DO WE MAKE UPDATES TO THIS NOTICE?
    </StyledHeader>
    <StyledParagraph>
      <StyledBold>In Short:</StyledBold> Yes, we will update this notice as
      necessary to stay compliant with relevant laws.
    </StyledParagraph>
    <StyledParagraph>
      We may update this privacy notice from time to time. The updated version
      will be indicated by an updated "Revised" date and the updated version
      will be effective as soon as it is accessible. If we make material changes
      to this privacy notice, we may notify you either by prominently posting a
      notice of such changes or by directly sending you a notification. We
      encourage you to review this privacy notice frequently to be informed of
      how we are protecting your information.
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
    </StyledHeader>
    <StyledParagraph>
      If you have questions or comments about this notice, you may email us at
      inquiry@wasedatime.com
    </StyledParagraph>
    <StyledHeader headerType="h3" centered>
      13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
    </StyledHeader>
    <StyledParagraph>
      Based on the applicable laws of your country, you may have the right to
      request access to the personal information we collect from you, change
      that information, or delete it in some circumstances. To request to
      review, update, or delete your personal information, please email us
      directly at inquiry@wasedatime.com. We will respond to your request within
      30 days.
    </StyledParagraph>
    <StyledParagraph>
      This privacy policy was created using{" "}
      <a
        href="https://termly.io/products/privacy-policy-generator/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Termly's Privacy Policy Generator.
      </a>
    </StyledParagraph>
  </div>
);

export default PrivacyPolicy;
