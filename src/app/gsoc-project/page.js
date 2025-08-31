import Link from "next/link";

export default function GSoCProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-light-gray p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-semibold text-black">
            Riddhi Gangbhoj
          </Link>
          
          <div className="flex gap-6">
            <Link href="/" className="hover:text-muted-pink transition-colors text-sm text-black">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-4">
        <div className="max-w-4xl mx-auto py-20">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-semibold text-black">
                  Comparing Regression Data
                </h1>
              </div>
              <div className="flex gap-3 items-center ml-4">
                <img 
                  src="/Google_Summer_of_Code_sun_logo_2022.png" 
                  alt="Google Summer of Code Logo"
                  className="h-10 w-auto"
                />
                <img 
                  src="/tardis-logo-2.svg" 
                  alt="TARDIS Logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-lg text-black mb-6">
              Google Summer of Code 2025 Project Report
            </p>
            
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Introduction
            </h2>
            <div className="bg-light-gray/50 rounded-lg p-8 shadow-sm border border-light-gray hover:border-soft-pink/30 transition-all duration-300">
              <p className="text-black text-base leading-relaxed mb-4">
                TARDIS is an open-source Monte Carlo radiative-transfer spectral synthesis code for 1D models of supernova ejecta. It is designed for rapid spectral modelling of supernovae.
              </p>
              <p className="text-black text-base leading-relaxed mb-4">
                TARDIS relies on a regression data framework in its testing to maintain its scientific accuracy. This regression data framework saves large TARDIS objects such as its simulation data into HDF files which are tracked in an external repository using git LFS. These HDF files are then retrieved during testing and the data produced at runtime is compared to this saved dataset to verify accuracy of the code.
              </p>
              <p className="text-black text-base leading-relaxed mb-6">
                <strong>The problem:</strong> Regression data is modified occasionally when new TARDIS features are added. HDF files, given their recursive internal structure, are hard to compare with other HDF files. Moreover, given multiple TARDIS commits, each of which are adding important features, there wasn't any functionality to compare the impact of each of these commits on the regression data and compare them together.
              </p>
            </div>
          </section>

          {/* Project Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Project Summary
            </h2>
            <div className="bg-light-gray/50 rounded-lg p-8 shadow-sm border border-light-gray hover:border-soft-pink/30 transition-all duration-300">
              <p className="text-black text-base leading-relaxed mb-8">
                <strong>Goal:</strong> Build a comprehensive regression data comparison notebook to track and visualize how TARDIS regression files change across different commits.
              </p>
              
              {/* Vertical Layout */}
              <div className="space-y-6">
                <div className="bg-light-gray/30 rounded-lg p-6 border border-soft-pink/20">
                  <h3 className="text-lg font-semibold mb-4 text-muted-pink flex items-center gap-2">
                    <span className="w-6 h-6 bg-muted-pink rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
                    Automated Commit Testing
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    The process begins by fetching tardis commit hashes from the tardis repository. The commits can be retrieved through two different methods: fetching the last n tardis commits or providing a custom commit list. Once the commits are obtained through either approach, they are then processed for the next step.
                  </p>
                  
                  {/* Step 1 Image */}
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="/step1.png" 
                      alt="Step 1 Automated Commit Testing Workflow"
                      className="w-full max-w-xs h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>

                <div className="bg-light-gray/30 rounded-lg p-6 border border-soft-pink/20">
                  <h3 className="text-lg font-semibold mb-4 text-muted-pink flex items-center gap-2">
                    <span className="w-6 h-6 bg-muted-pink rounded-full flex items-center justify-center text-white text-xs font-bold">2</span>
                    Environment Management
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    The system follows a structured workflow to create TARDIS environments for each commit to ensure regression data reproducibility. It provides various options and provides detailed configurable log statements at each step.
                  </p>
                  <p className="text-black text-sm leading-relaxed mt-4">
                    The workflow by default automatically fetches the environment file for each commit and creates a fresh environment for it to process the regression data in. TARDIS uses conda lockfiles which have precise dependency versions for recreating the environment.
                  </p>
                  <p className="text-black text-sm leading-relaxed mt-4">
                    Once the environment is installed, the workflow also fetches the optional dependencies from pyproject.toml automatically(TARDIS has some pip based dependencies as optional dependency for visualisation modules). After installing the dependencies, the workflow proceeds to run tests for that commit.
                  </p>
                  <p className="text-black text-sm leading-relaxed mt-4">
                    The workflow also allows to reuse environments if they have already been created in previous runs.
                  </p>
                  <p className="text-black text-sm leading-relaxed mt-4">
                    At any step, if the workflow fails to process any step, for e.g., installing optional dependencies, it will default to the default environment but will continue to process commits. The system warns the user that such failure has occurred, since failed installations and the regression data produced from such commits won't be as reliable from a scientific perspective.
                  </p>
                  
                  {/* Step 2 Image */}
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="/step2.png" 
                      alt="Step 2 Environment Management Workflow"
                      className="w-full max-w-lg h-auto rounded-lg shadow-sm"
                    />
                  </div>
                  
                  {/* Terminal Output */}
                  <div className="mt-6 bg-black text-purple-300 p-4 rounded text-xs font-mono overflow-auto h-48">
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Original HEAD of regression data repo: 7a61fc3a19eba4d08008c599ce39bdf24ad678ca</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Processing commit 1/3: 701bb18916886ecf2797b0dda4843750f69592da</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Creating conda environment: tardis-test-701bb189</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Checking if environment tardis-test-701bb189 exists...</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Executing command: conda env list</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Command completed successfully.</div>
                    <div className="mb-2"></div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Environment tardis-test-701bb189 exists, removing it for recreation...</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Executing command: conda env remove --name tardis-test-701bb189 -y</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Command completed successfully.</div>
                    <div className="mb-2"></div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Creating conda environment</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Executing command: conda create --name tardis-test-701bb189 --file /tmp/tmphaib48h8.lock -y</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Command completed successfully.</div>
                    <div className="mb-2"></div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Installing TARDIS with all extras ['viz', 'tardisbase']</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:Executing command: conda run -n tardis-test-701bb189 pip install -e /home/riddhigangbhoj/tardis-work/tardis[viz,tardisbase]</div>
                    <div className="mb-0">INFO:tardisbase.testing.regression_comparison.run_tests:Command completed successfully.</div>
                  </div>
                </div>

                <div className="bg-light-gray/30 rounded-lg p-6 border border-soft-pink/20">
                  <h3 className="text-lg font-semibold mb-4 text-muted-pink flex items-center gap-2">
                    <span className="w-6 h-6 bg-muted-pink rounded-full flex items-center justify-center text-white text-xs font-bold">3</span>
                    Testing
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    For each commit, the system executes pytest to run both continuum and non-continuum test suites. Once testing is complete, the generated regression data from these test runs is committed to the repository, creating a new commit that captures the test results.
                  </p>
                  
                  {/* Terminal Output */}
                  <div className="mt-6 bg-black text-purple-300 p-4 rounded text-xs font-mono overflow-x-auto">
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:</div>
                    <div className="mb-2">Processed Tardis Commits:</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:701bb18916886ecf2797b0dda4843750f69592da</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:ce43cec0fa5d9255108c90c84659c71d34fb1c26</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:fa4c4ea98055ea3bef24d69feba26fb5f74c2ddf</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:</div>
                    <div className="mb-2">Regression Data Commits:</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:effdb1b68bf069630446c837d5f79ef602dd29c7</div>
                    <div className="mb-2">INFO:tardisbase.testing.regression_comparison.run_tests:6de6fb12155b6fc55d0fb808b1795175d4ee7015</div>
                    <div className="mb-0">INFO:tardisbase.testing.regression_comparison.run_tests:6a33cdd4c32a2715ee6c8e7e29c999f580eaadcf</div>
                  </div>
                  
                  {/* Step 3 Image */}
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="/step3.png" 
                      alt=""
                      className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>

                <div className="bg-light-gray/30 rounded-lg p-6 border border-soft-pink/20">
                  <h3 className="text-lg font-semibold mb-4 text-muted-pink flex items-center gap-2">
                    <span className="w-6 h-6 bg-muted-pink rounded-full flex items-center justify-center text-white text-xs font-bold">4</span>
                    Getting regression Data commits
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    There are two ways to proceed after this step. The first option is to use falsely generated regression commits that are created programmatically from the tardis commits obtained in the previous step. The second option is to fetch regression data commits directly from git, which can be done by either retrieving the last n commits or by providing custom commit hashes.
                  </p>
                  
                  {/* Step 4 Image */}
                  <div className="mt-6 flex justify-center">
                    <img 
                      src="/step4.png" 
                      alt=""
                      className="w-full max-w-sm h-auto rounded-lg shadow-sm"
                    />
                  </div>
                </div>

                <div className="bg-light-gray/30 rounded-lg p-6 border border-soft-pink/20">
                  <h3 className="text-lg font-semibold mb-4 text-muted-pink flex items-center gap-2">
                    <span className="w-6 h-6 bg-muted-pink rounded-full flex items-center justify-center text-white text-xs font-bold">5</span>
                    Comparison of Regression Data commits
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    Once the regression data commits have been finalised, it's time to move to the comparison step. If you wish, you can also preview the commits with details about how they were generated before moving forward.
                  </p>
                  
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-black">
                          <th className="border border-gray-300 p-2">#</th>
                          <th className="border border-gray-300 p-2">Hash</th>
                          <th className="border border-gray-300 p-2">Description</th>
                          <th className="border border-gray-300 p-2">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-gray-300 p-2">1</td><td className="border border-gray-300 p-2 font-mono">effdb1</td><td className="border border-gray-300 p-2">Regression data for --Relativity BugFix [2] (#3176)</td><td className="border border-gray-300 p-2">2025-08-28 03:26</td></tr>
                        <tr><td className="border border-gray-300 p-2">2</td><td className="border border-gray-300 p-2 font-mono">6de6fb</td><td className="border border-gray-300 p-2">Regression data for --add from workflow method to sdec and liv plot (#3198)</td><td className="border border-gray-300 p-2">2025-08-28 03:50</td></tr>
                        <tr><td className="border border-gray-300 p-2">3</td><td className="border border-gray-300 p-2 font-mono">6a33cd</td><td className="border border-gray-300 p-2">Regression data for --Post-release 2025.07.20 (#3201)</td><td className="border border-gray-300 p-2">2025-08-28 04:13</td></tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-black text-sm leading-relaxed mt-6">
                    The workflow compares two commits at a time, running git diff on each pair. For more comprehensive testing, the workflow automatically copies over contents from each item into temporary directories. The current code only allows git based diffs and command line based diffs but is modular so that new comparison methods can be added easily.
                  </p>
                  <p className="text-black text-sm leading-relaxed mt-4">
                    There are filtering options for .H5 and .npy files, too in case you want to just view certain types of files in the comparison.
                  </p>
                  <p className="text-black text-sm leading-relaxed mt-4">
                    The comparison matrix creates a table where each column is compared between two consecutive commits, and each cell under those columns is either modified(M), unchanged(•), not-present(-), deleted(D) or added(A).
                  </p>
                  
                  {/* Sample Data Table from Index 160-170 */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-black mb-3">Sample Comparison Results (Index 160-170):</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-100 text-black">
                            <th className="border border-gray-300 p-2 text-left">Index</th>
                            <th className="border border-gray-300 p-2 text-left">File Path</th>
                            <th className="border border-gray-300 p-2 text-center">32c5e0-e1656c</th>
                            <th className="border border-gray-300 p-2 text-center">8ee899-32c5e0</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">160</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/tests/test_tardis_full_formal_integral/test_transport_simple_formal_integral/test_spectrum_integrated__30-downbranch__.npy</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">161</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/tests/test_tardis_full_formal_integral/test_transport_simple_formal_integral/test_spectrum_integrated__30-macroatom__.npy</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">162</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_continuum/test_montecarlo_continuum.h5</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">163</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_montecarlo_main_loop/test_montecarlo_main_loop.h5</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">164</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_montecarlo_main_loop/test_montecarlo_main_loop_vpacket_log.h5</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">165</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_packet_source/test_black_body_simple_source/test_bb_attributes.h5</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">166</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_packet_source/test_black_body_simple_source/test_bb_energies.npy</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">167</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_packet_source/test_black_body_simple_source/test_bb_mus.npy</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">168</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_packet_source/test_black_body_simple_source/test_bb_nus.npy</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">169</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_packet_source/test_black_body_simple_source_rel/test_bb_attributes.h5</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                            <td className="border border-gray-300 p-2 text-center font-semibold">M</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2 font-mono">170</td>
                            <td className="border border-gray-300 p-2 text-xs">tardis/transport/montecarlo/tests/test_packet_source/test_black_body_simple_source_rel/test_bb_energies.npy</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                            <td className="border border-gray-300 p-2 text-center">•</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-600 mt-3">
                      <strong>Legend:</strong> • = No change, M = Modified
                    </p>
                  </div>
                  
                  <div className="mt-6 text-sm">
                    <a 
                      href="https://tardis-sn.github.io/tardisbase/compare_commits.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-pink hover:text-black transition-colors underline"
                    >
                      View full notebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Acknowledgement */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-black">
              Acknowledgement
            </h2>
            <div className="bg-light-gray/50 rounded-lg p-8 shadow-sm border border-light-gray hover:border-soft-pink/30 transition-all duration-300">
              <p className="text-black text-base leading-relaxed mb-4">
                I am deeply grateful to my mentors Wolfgang Kerzendorf, Andrew Fullard, Atharva Arya, and Abhinav Ohri for their invaluable guidance throughout this project. Their consistent feedback and direction have been really important for my development.
              </p>
              <p className="text-black text-base leading-relaxed">
                The environment in TARDIS is really great for learning and growing and the team has been incredibly supportive. I'm grateful for the opportunity to be part of this team.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}